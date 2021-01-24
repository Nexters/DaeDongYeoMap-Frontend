import React from 'react';
import SpotGenerator, { Props as SpotGeneratorProps } from './SpotGenerator';
import { PopupType, PopupProps } from '~/@types/popup.d';
import Modal from '~/components/_common/Modal';

/**
 * @description
 * App 전체의 Stacking Context(zIndex)를 일괄적으로 관리하고,
 * 모달 통합관리를 위한 모듈
 */
const Popup: React.FC<PopupProps> = (props) => {
  const { popupType, popupProps, onClickCloseButton } = props;

  if (popupType === PopupType.SPOT_GENERATOR) {
    const props = (popupProps || {}) as SpotGeneratorProps;

    return (
      <Modal>
        <SpotGenerator
          zIndex="10000"
          onClickCloseButton={onClickCloseButton}
          {...props}
        />
      </Modal>
    );
  }

  return null;
};

export default Popup;
