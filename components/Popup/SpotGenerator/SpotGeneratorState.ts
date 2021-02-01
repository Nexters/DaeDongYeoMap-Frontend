import { makeVar, useReactiveVar } from '@apollo/client';
import stickers from '~/constants/stickers';
import { Sugar } from '~/@types/daedong.d';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';

type FormSugarState = Sugar;
type FormStickerState = string;
type FormPartnerState = string;
type FormDateState = [number, number, number];
type FormResetter = () => void;

const formSugarState = makeVar<FormSugarState>(Sugar.Degree100);
const formStickerState = makeVar<FormStickerState>(stickers[0].id);
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
    formSugarState(Sugar.Degree100);
    formStickerState(stickers[0].id);
    formPartnerState(null);
    formDateState(null);
  };

  return resetForm;
};
