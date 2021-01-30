import { makeVar } from '@apollo/client';
import type { PopupProps } from '~/@types/popup';

export const popupState = makeVar<PopupProps>({
  popupType: null,
  popupProps: null,
});
