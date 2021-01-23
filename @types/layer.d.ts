export enum LayerType {
  SPOT_GENERATOR,
}

export type LayerProps = {
  layerType: LayerType;
  layerProps?: SpotGeneratorProps;
  onClickCloseButton?: () => void;
};

export type LayerChildProps = {
  zIndex?: string;
  onClickCloseButton?: () => void;
};
