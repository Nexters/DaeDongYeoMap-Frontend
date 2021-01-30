export enum PopupType {
  SPOT_GENERATOR,
}

export type PopupProps = {
  popupType: PopupType;
  popupProps?: SpotGeneratorProps;
};

export type PopupChildProps = {
  zIndex?: string;
};
