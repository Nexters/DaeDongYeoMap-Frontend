import type { Sugar } from '~/@types/daedong.d';

export type StickerProps = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
};

export type AdditionalProps = {
  sugar: Sugar;
};

export type StickerWithSugarProps = StickerProps & AdditionalProps;

export type StickerComponent = ComponentType<StickerProps>;

export type StickerWithSugarComponent = ComponentType<StickerWithSugarProps>;
