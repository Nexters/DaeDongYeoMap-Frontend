import type { StickerComponent } from './Sticker.d';

const withSrc = (
  StickerIcon: StickerComponent,
  src: string
): StickerComponent => {
  const WithSugarComponent: StickerComponent = (props) => (
    <StickerIcon src={src} {...props} />
  );

  return WithSugarComponent;
};

export default withSrc;
