import { makeVar, useReactiveVar } from '@apollo/client';
import stickers from '~/constants/stickers';

type FormSugarState = string;
type FormStickerState = string;
type FormPartnerState = string;
type FormDateState = [number, number, number];
type StateSetter<State> = (newState: State) => void;
type UseStateHook<State> = () => [State, StateSetter<State>];

const formSugarState = makeVar<FormSugarState>(null);
const formStickerState = makeVar<FormStickerState>(stickers[0].id);
const formPartnerState = makeVar<FormPartnerState>(null);
const formDateState = makeVar<FormDateState>(null);

export const useFormSugarState: UseStateHook<FormSugarState> = () => {
  const formSugar: FormSugarState = useReactiveVar(formSugarState);
  const setFormSugar: StateSetter<FormSugarState> = (newFormSugar) =>
    formSugarState(newFormSugar);

  return [formSugar, setFormSugar];
};

export const useFormStickerState: UseStateHook<FormStickerState> = () => {
  const formSticker: FormStickerState = useReactiveVar(formStickerState);
  const setFormSticker: StateSetter<FormStickerState> = (newFormSticker) =>
    formStickerState(newFormSticker);

  return [formSticker, setFormSticker];
};

export const useFormPartnerState: UseStateHook<FormPartnerState> = () => {
  const formPartner: FormPartnerState = useReactiveVar(formPartnerState);
  const setFormPartner: StateSetter<FormPartnerState> = (newFormPartner) =>
    formPartnerState(newFormPartner);

  return [formPartner, setFormPartner];
};

export const useFormDateState: UseStateHook<FormDateState> = () => {
  const formDate: FormDateState = useReactiveVar(formDateState);
  const setFormDate: StateSetter<FormDateState> = (newFormDate) =>
    formDateState(newFormDate);

  return [formDate, setFormDate];
};
