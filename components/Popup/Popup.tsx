import React from 'react';
import { useReactiveVar } from '@apollo/client';
import SpotGenerator, { Props as SpotGeneratorProps } from './SpotGenerator';
import { PopupType } from '~/@types/popup.d';
import { popupState } from '~/lib/apollo/vars/global';
import Modal from '~/components/_common/Modal';

/**
 * @description
 * App 전체의 Stacking Context(zIndex)를 일괄적으로 관리하고,
 * 모달 통합관리를 위한 모듈
 */
const Popup: React.FC = () => {
  const { popupType, popupProps } = useReactiveVar(popupState);

  console.log('POPUP: ', popupType, popupProps);

  if (popupType === null) {
    return null;
  }

  if (popupType === PopupType.SPOT_GENERATOR) {
    const props = popupProps as SpotGeneratorProps;

    return (
      <Modal>
        <SpotGenerator zIndex="10000" {...props} />
      </Modal>
    );
  }

  return null;
};

export default Popup;
