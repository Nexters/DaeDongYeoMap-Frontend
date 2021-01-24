import React from 'react';
import { useRecoilState } from 'recoil';
import emojis from '~/constants/emojis';
import { emojiState } from '~/components/Popup/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaEmojiView';
import type { Emoji } from '~/constants/emojis';

const AreaEmoji: React.FC = () => {
  const [selectedEmoji, setSelectedEmoji] = useRecoilState(emojiState);
  // @see Flex로 Flexible Grid 정렬을 하기 위한, 더미 아이템 요소를 4n개에 맞게 추가
  const emojisToGrid: Emoji[] = [null, null, null, null].reduce(
    (emojisToGrid, dummy) => {
      if (emojisToGrid.length % 4 !== 0) emojisToGrid.push(dummy);
      return emojisToGrid;
    },
    emojis
  );
  const handleClickEmoji = (e: React.MouseEvent, emojiId: number) => {
    e.preventDefault();
    setSelectedEmoji(emojiId);
  };

  return (
    <$.AreaEmoji>
      <$.EmojiList>
        {emojisToGrid.map((emoji, i) => (
          <$.EmojiItem key={`emoji-button-${i}`}>
            {emoji && (
              <$.EmojiButton
                onClick={(e) => handleClickEmoji(e, emoji.id)}
                style={{
                  transform: emoji.id === selectedEmoji ? 'scale(1.3)' : '',
                }}
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
