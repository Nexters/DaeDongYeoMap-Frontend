import React from 'react';
import SpotGenerator, { Props as SpotGeneratorProps } from './SpotGenerator';
import { LayerType, LayerProps } from '~/@types/layer.d';
import Modal from '~/components/_common/Modal';

/**
 * @description
 * App 전체의 Stacking Context(zIndex)를 일괄적으로 관리하고,
 * 모달 통합관리를 위한 모듈
 */
const Layer: React.FC<LayerProps> = (props) => {
  const { layerType, layerProps, onClickCloseButton } = props;

  if (layerType === LayerType.SPOT_GENERATOR) {
    const props = (layerProps || {}) as SpotGeneratorProps;

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

export default Layer;
