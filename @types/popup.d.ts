export enum PopupType {
  SPOT_GENERATOR,
}

export type PopupProps = {
  popupType: PopupType;
  popupProps?: SpotGeneratorProps;
  onClickCloseButton?: () => void;
};

export type PopupChildProps = {
  zIndex?: string;
  onClickCloseButton?: () => void;
};
