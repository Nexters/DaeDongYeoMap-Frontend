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

// 중간에 논의가 바뀌는 바람에
// id를 파싱해서 당도와 스티커 인덱스를 얻어와야 함.
// 추후 리팩토링 필요.

export const parseStickerId = (stickerId: string): [number, number] => {
  const firstIndexOfUnderbar = stickerId.indexOf('_');
  const lastIndexOfUnderbar = stickerId.lastIndexOf('_');

  const stickerIndex: number = parseInt(
    stickerId.substr(lastIndexOfUnderbar + 1),
    10
  );
  const sweetPercent: number = parseInt(
    stickerId.substr(firstIndexOfUnderbar + 1, lastIndexOfUnderbar),
    10
  );

  return [sweetPercent, stickerIndex];
};

const sugar: SugarMap = sugarValueMapper({
  sugar0: {
    stickers: [
      {
        id: 'sweets_0_0',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_0.png',
      },
      {
        id: 'sweets_0_1',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_1.png',
      },
      {
        id: 'sweets_0_2',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_2.png',
      },
      {
        id: 'sweets_0_3',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_3.png',
      },
      {
        id: 'sweets_0_4',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_4.png',
      },
      {
        id: 'sweets_0_5',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_5.png',
      },
      {
        id: 'sweets_0_6',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_6.png',
      },
      {
        id: 'sweets_0_7',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_7.png',
      },
      {
        id: 'sweets_0_8',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_8.png',
      },
      {
        id: 'sweets_0_9',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_9.png',
      },
      {
        id: 'sweets_0_10',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_10.png',
      },
      {
        id: 'sweets_0_11',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/0_11.png',
      },
    ],
  },
  sugar30: {
    stickers: [
      {
        id: 'sweets_30_0',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_0.png',
      },
      {
        id: 'sweets_30_1',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_1.png',
      },
      {
        id: 'sweets_30_2',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_2.png',
      },
      {
        id: 'sweets_30_3',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_3.png',
      },
      {
        id: 'sweets_30_4',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_4.png',
      },
      {
        id: 'sweets_30_5',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_5.png',
      },
      {
        id: 'sweets_30_6',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_6.png',
      },
      {
        id: 'sweets_30_7',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_7.png',
      },
      {
        id: 'sweets_30_8',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_8.png',
      },
      {
        id: 'sweets_30_9',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_9.png',
      },
      {
        id: 'sweets_30_10',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_10.png',
      },
      {
        id: 'sweets_30_11',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/30_11.png',
      },
    ],
  },
  sugar50: {
    stickers: [
      {
        id: 'sweets_50_0',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_0.png',
      },
      {
        id: 'sweets_50_1',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_1.png',
      },
      {
        id: 'sweets_50_2',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_2.png',
      },
      {
        id: 'sweets_50_3',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_3.png',
      },
      {
        id: 'sweets_50_4',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_4.png',
      },
      {
        id: 'sweets_50_5',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_5.png',
      },
      {
        id: 'sweets_50_6',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_6.png',
      },
      {
        id: 'sweets_50_7',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_7.png',
      },
      {
        id: 'sweets_50_8',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_8.png',
      },
      {
        id: 'sweets_50_9',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_9.png',
      },
      {
        id: 'sweets_50_10',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_10.png',
      },
      {
        id: 'sweets_50_11',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/50_11.png',
      },
    ],
  },
  sugar70: {
    stickers: [
      {
        id: 'sweets_70_0',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_0.png',
      },
      {
        id: 'sweets_70_1',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_1.png',
      },
      {
        id: 'sweets_70_2',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_2.png',
      },
      {
        id: 'sweets_70_3',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_3.png',
      },
      {
        id: 'sweets_70_4',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_4.png',
      },
      {
        id: 'sweets_70_5',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_5.png',
      },
      {
        id: 'sweets_70_6',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_6.png',
      },
      {
        id: 'sweets_70_7',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_7.png',
      },
      {
        id: 'sweets_70_8',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_8.png',
      },
      {
        id: 'sweets_70_9',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_9.png',
      },
      {
        id: 'sweets_70_10',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_10.png',
      },
      {
        id: 'sweets_70_11',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/70_11.png',
      },
    ],
  },
  sugar100: {
    stickers: [
      {
        id: 'sweets_100_0',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_0.png',
      },
      {
        id: 'sweets_100_1',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_1.png',
      },
      {
        id: 'sweets_100_2',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_2.png',
      },
      {
        id: 'sweets_100_3',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_3.png',
      },
      {
        id: 'sweets_100_4',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_4.png',
      },
      {
        id: 'sweets_100_5',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_5.png',
      },
      {
        id: 'sweets_100_6',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_6.png',
      },
      {
        id: 'sweets_100_7',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_7.png',
      },
      {
        id: 'sweets_100_8',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_8.png',
      },
      {
        id: 'sweets_100_9',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_9.png',
      },
      {
        id: 'sweets_100_10',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_10.png',
      },
      {
        id: 'sweets_100_11',
        imageUrl:
          'https://storage.googleapis.com/sticker_images/sweets/100_11.png',
      },
    ],
  },
});

export const sticker = stickerMapper(sugar);

export default sugar;
