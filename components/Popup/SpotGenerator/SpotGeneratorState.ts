import { makeVar, gql, useMutation } from '@apollo/client';
import sugar from '~/constants/sugar';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
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
  query CreateSticker($createStickerInput: CreateStickerInput) {
    createSticker(createStickerInput: $createStickerInput) {
      _id
      sticker_category
      is_used
      spot
    }
  }
`;

export const useCreateSticker = (): CreateSticker => {
  const [request] = useMutation<
    GQL.CreateSticker.Data,
    GQL.CreateSticker.Variables
  >(CREATE_STICKER);

  const createSticker: CreateSticker = (place) => {
    request({
      variables: {
        createStickerInput: {
          place_id: place.id,
          place_name: place.name,
          sticker_category: `${formSugarState()}_${formStickerState()}`,
          x: place.x,
          y: place.y,
        },
      },
    });
  };

  return createSticker;
};
