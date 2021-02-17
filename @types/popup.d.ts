export enum PopupType {
  SPOT_GENERATOR,
  COURSE_SHARE,
}

export type PopupProps = {
  popupType: PopupType;
  popupProps?: SpotGeneratorProps;
};

export type PopupChildProps = {
  zIndex?: string;
};
