import { makeVar, gql, useMutation, useApolloClient } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import { useEndSpotsRemover } from '../CandidateSpots/CandidateSpotsState';
import { useSpotFormResetter } from './SpotForm/SpotFormState';
import { PopupType } from '~/@types/popup.d';
import { usePopupOpener } from '~/lib/apollo/hooks/usePopup';
import Storage from '~/lib/storage';
import type { StickerCardRecord } from '~/@types/record.d';

const formTitle = makeVar<string>('');
const formSpots = makeVar<StickerCardRecord[]>([]);

export const [
  useFormTitle,
  useFormTitleSetter,
  useFormTitleState,
] = createReactiveVarHooks(formTitle);

export const [
  useFormSpots,
  useFormSpotsSetter,
  useFormSpotsState,
] = createReactiveVarHooks(formSpots);

const GET_COURSE = gql`
  query Course($courseInput: CourseInput!) {
    course(courseInput: $courseInput) {
      _id
      stickers(populate: true) {
        sweet_percent
        sticker_index
      }
      title
      is_share
      courseImage
    }
  }
`;

const CREATE_COURSE = gql`
  mutation CreateCourse($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      _id
      stickers(populate: true) {
        sweet_percent
        sticker_index
      }
      title
      is_share
      courseImage
    }
  }
`;

export const useFormSubmitter = (): (() => void) => {
  const client = useApolloClient();
  const openPopup = usePopupOpener();
  const [createCourse] = useMutation<
    GQL.CreateCourse.Data,
    GQL.CreateCourse.Variables
  >(CREATE_COURSE, {
    onCompleted({ createCourse: data }) {
      client
        .query<GQL.GetCourse.Data, GQL.GetCourse.Variables>({
          query: GET_COURSE,
          variables: {
            courseInput: {
              courseId: data._id,
              courseImageInput: {
                theme: 'street',
                width: 800,
                height: 800,
              },
            },
          },
        })
        .then(({ data: { course } }) => {
          Storage.addCourseCard({
            id: course._id,
            numStickers: course.stickers.length,
            stickers: course.stickers,
            timestamp: Math.floor(Date.now() / 1000),
            ...course,
          });
          openPopup({
            popupType: PopupType.COURSE_SHARE,
            popupProps: {
              course,
            },
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  const removeEndSpots = useEndSpotsRemover();
  const resetSpotForm = useSpotFormResetter();

  return () => {
    removeEndSpots();
    resetSpotForm();
    createCourse({
      variables: {
        createCourseInput: {
          stickers: formSpots().map((spot) => spot.id),
          title: formTitle(),
          is_share: true,
        },
      },
    });
  };
};
