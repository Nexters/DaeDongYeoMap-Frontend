import { makeVar, gql } from '@apollo/client';
import sugar from '~/constants/sugar';
import storage from '~/storage';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import { v1 as uuidv1 } from 'uuid';
import type { Sugar } from '~/constants/sugar';

type FormSugarState = Sugar;
type FormStickerState = string;
type FormPartnerState = string;
type FormDateState = [number, number, number];
type FormResetter = () => void;

const formSugarState = makeVar<FormSugarState>('sugar100');
const formStickerState = makeVar<FormStickerState>(
  sugar.sugar100.stickers[0].id
);
const formPartnerState = makeVar<FormPartnerState>(null);
const formDateState = makeVar<FormDateState>(null);

export const [
  useFormSugar,
  useFormSugarSetter,
  useFormSugarState,
] = createReactiveVarHooks(formSugarState);

export const [
  useFormSticker,
  useFormStickerSetter,
  useFormStickerState,
] = createReactiveVarHooks(formStickerState);

export const [
  useFormPartner,
  useFormPartnerSetter,
  useFormPartnerState,
] = createReactiveVarHooks(formPartnerState);

export const [
  useFormDate,
  useFormDateSetter,
  useFormDateState,
] = createReactiveVarHooks(formDateState);

export const useFormResetter = (): FormResetter => {
  const resetForm: FormResetter = () => {
    formSugarState('sugar100');
    formStickerState(sugar.sugar100.stickers[0].id);
    formPartnerState(null);
    formDateState(null);
  };

  return resetForm;
};

export type CreateSticker = (place: {
  id: string;
  name: string;
  x: number;
  y: number;
}) => void;

export const CREATE_STICKER = gql`
  mutation CreateSticker($createStickerInput: CreateStickerInput) {
    createSticker(createStickerInput: $createStickerInput) {
      _id
      sticker_category
      is_used
      spot
    }
  }
`;

export const useCreateSticker = (): CreateSticker => {
  // const [request] = useMutation<
  //   GQL.CreateSticker.Data,
  //   GQL.CreateSticker.Variables
  // >(CREATE_STICKER);

  const [x, y] = createMockCoord();
  const createSticker: CreateSticker = (
    place = {
      id: 'placeId',
      name: '모킹 장소',
      x,
      y,
    }
  ) => {
    const sticker_category = `${formStickerState()}`;
    const partner = formPartnerState() || '';
    const spot = {
      id: uuidv1(),
      stickerId: sticker_category,
      title: place.name,
      partner,
      timestamp: Math.floor(Date.now() / 1000),
    };

    console.log(spot);

    storage.addSpot(spot);

    // TODO: 추후 지도 상태와 연동
    // request({
    //   variables: {
    //     createStickerInput: {
    //       place_id: place?.id,
    //       place_name: place?.name,
    //       sticker_category,
    //       x,
    //       y,
    //     },
    //   },
    // });
  };

  return createSticker;
};

function createMockCoord(): [number, number] {
  const xRange = 127;
  const yRange = 37.4;

  const x = (Math.random() / 10) * 2 + xRange;
  const y = (Math.random() / 10) * 2 + yRange;

  return [x, y];
}
