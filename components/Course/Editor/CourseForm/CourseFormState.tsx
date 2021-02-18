import { makeVar, gql, useMutation } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import type { SpotView } from '../EditorState';
import { useEndSpotsRemover } from '../CandidateSpots/CandidateSpotsState';
import { useSpotFormResetter } from './SpotForm/SpotFormState';

const formTitle = makeVar<string>('');
const formSpots = makeVar<SpotView[]>([]);

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

const CREATE_COURSE = gql`
  mutation CreateCourse($createCourseInput: CreateCourseInput) {
    createCourse(createCourseInput: $createCourseInput) {
      _id
      stickers
      title
      is_share
      courseImage
    }
  }
`;

export const useFormSubmitter = (): (() => void) => {
  const [createCourse] = useMutation<
    GQL.CreateCourse.Data,
    GQL.CreateCourse.Variables
  >(CREATE_COURSE, {
    onCompleted({ createCourse: data }) {
      console.log(data);
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
