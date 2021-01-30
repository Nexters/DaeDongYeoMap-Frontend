import React from 'react';
import emojis from '~/constants/emojis';
import * as $ from './AreaEmojiView';
import type { Emoji } from '~/constants/emojis';

const AreaEmoji: React.FC = () => {
  // @see Flex로 Flexible Grid 정렬을 하기 위한, 더미 아이템 요소를 4n개에 맞게 추가
  const emojisToGrid: Emoji[] = [null, null, null, null].reduce(
    (emojisToGrid, dummy) => {
      if (emojisToGrid.length % 4 !== 0) emojisToGrid.push(dummy);
      return emojisToGrid;
    },
    emojis
  );
  const handleClickEmoji = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <$.AreaEmoji>
      <$.EmojiList>
        {emojisToGrid.map((emoji, i) => (
          <$.EmojiItem key={`emoji-button-${i}`}>
            {emoji && (
              <$.EmojiButton
                onClick={(e) => handleClickEmoji(e)}
                aria-selected={false}
              >
                <$.EmojiImage src={emoji.imageUrl} />
              </$.EmojiButton>
            )}
          </$.EmojiItem>
        ))}
      </$.EmojiList>
    </$.AreaEmoji>
  );
};

export default AreaEmoji;
