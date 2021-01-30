import { popupState } from '../vars/global';
import type { PopupProps } from '~/@types/popup';

export const usePopupOpener = () => (popupProps: PopupProps): void => {
  popupState(popupProps);
};

export const usePopupCloser = () => (): void => {
  popupState({
    popupType: null,
    popupProps: null,
  });
};
