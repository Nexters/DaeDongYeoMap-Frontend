import React from 'react';
import Sticker from '~/components/_assets/sticker/Sticker';
import withSrc from '~/components/_assets/sticker/withSrc';
import withSugar from '~/components/_assets/sticker/withSugar';
import type {
  StickerComponent,
  StickerWithSugarComponent,
} from '~/components/_assets/sticker/Sticker.d';

export type Sticker = {
  id: string;
  imageUrl: string;
  Icon: StickerComponent;
  IconWithSugar: StickerWithSugarComponent;
};

export type SugarValue = {
  stickers: Sticker[];
};

export type SugarMap = {
  sugar0: SugarValue;
  sugar30: SugarValue;
  sugar50: SugarValue;
  sugar70: SugarValue;
  sugar100: SugarValue;
};

export type StickerMap = {
  [stickerId: string]: Sticker;
};

export type Sugar = keyof SugarMap;

type ManagedSugarMap = {
  [sugar in Sugar]: {
    stickers: Array<Partial<Sticker>>;
  };
};

const sugarValueMapper = (sugarMap: ManagedSugarMap): SugarMap => {
  Object.keys(sugarMap).forEach((sugar: Sugar) => {
    sugarMap[sugar].stickers = sugarMap[sugar].stickers.map(
      ({ id, imageUrl }) => {
        const Icon: StickerComponent = withSrc(Sticker, imageUrl);
        const IconWithSugar: StickerWithSugarComponent = withSugar(Icon, sugar);

        return {
          id,
          imageUrl,
          Icon,
          IconWithSugar,
        };
      }
    );
  });

  return sugarMap as SugarMap;
};

const stickerMapper = (sugarMap: SugarMap): StickerMap =>
  Object.values(sugarMap).reduce((stickerMap: StickerMap, { stickers }) => {
    if (stickers) {
      stickers.forEach((sticker: Sticker) => {
        stickerMap[sticker.id] = sticker;
      });
    }

    return stickerMap;
  }, {});

const sugar: SugarMap = sugarValueMapper({
  sugar0: {
    stickers: [
      {
        id: 'sticker0',
        imageUrl: '/stickers/sticker_dummy.png',
      },
      {
        id: 'sticker1',
        imageUrl: '/stickers/sticker_dummy.png',
      },
    ],
  },
  sugar30: {
    stickers: [
      {
        id: 'sticker0',
        imageUrl: '/stickers/sticker_dummy.png',
      },
      {
        id: 'sticker1',
        imageUrl: '/stickers/sticker_dummy.png',
      },
    ],
  },
  sugar50: {
    stickers: [
      {
        id: 'sticker0',
        imageUrl: '/stickers/sticker_dummy.png',
      },
      {
        id: 'sticker1',
        imageUrl: '/stickers/sticker_dummy.png',
      },
    ],
  },
  sugar70: {
    stickers: [
      {
        id: 'sticker0',
        imageUrl: '/stickers/sticker_dummy.png',
      },
      {
        id: 'sticker1',
        imageUrl: '/stickers/sticker_dummy.png',
      },
    ],
  },
  sugar100: {
    stickers: [
      {
        id: 'sticker0',
        imageUrl: '/stickers/sticker_dummy.png',
      },
      {
        id: 'sticker1',
        imageUrl: '/stickers/sticker_dummy.png',
      },
    ],
  },
});

export const sticker = stickerMapper(sugar);

export default sugar;
