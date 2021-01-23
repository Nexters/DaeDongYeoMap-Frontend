import React from 'react';
import SpotGenerator, { Props as SpotGeneratorProps } from './SpotGenerator';
import { LayerType } from '~/@types/layer.d';

type Props = {
  layerType: LayerType;
  layerProps?: SpotGeneratorProps;
};

class Layer extends React.Component<Props> {
  private modalElement: HTMLElement;
  private wrapperElement: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.modalElement = document.getElementById('modal-root');
    this.wrapperElement = document.createElement('div');
  }

  componentDidMount(): void {
    this.modalElement?.appendChild(this.wrapperElement);
  }

  componentWillUnmount(): void {
    this.modalElement?.removeChild(this.wrapperElement);
  }

  render(): JSX.Element {
    const { layerType, layerProps } = this.props;

    if (layerType === LayerType.SPOT_GENERATOR) {
      const props = (layerProps || {}) as SpotGeneratorProps;

      return <SpotGenerator zIndex="10000" {...props} />;
    }

    return null;
  }
}

export default Layer;
