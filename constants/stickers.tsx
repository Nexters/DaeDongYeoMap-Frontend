import React from 'react';
import Sticker from '~/components/_assets/sticker/Sticker';
import withSugar from '~/components/_assets/sticker/withSugar';
import type {
  StickerComponent,
  StickerWithSugarComponent,
} from '~/components/_assets/sticker/Sticker.d';

export interface StickerMap {
  id: string;
  imageUrl: string;
  Icon: StickerComponent;
  IconWithSugar: StickerWithSugarComponent;
}

// TODO: waiting sticker icon design
const partialStickers: Array<Partial<StickerMap>> = [
  {
    id: 'sticker0',
    imageUrl: '/stickers/sticker_dummy.png',
  },
  {
    id: 'sticker1',
    imageUrl: '/stickers/sticker_dummy.png',
  },
];

const stickers: StickerMap[] = partialStickers.map(({ id, imageUrl }) => {
  const Icon: StickerComponent = (props) => (
    <Sticker src={imageUrl} {...props} />
  );
  const IconWithSugar: StickerWithSugarComponent = withSugar(Icon);

  return {
    id,
    imageUrl,
    Icon,
    IconWithSugar,
  };
});

export default stickers;
