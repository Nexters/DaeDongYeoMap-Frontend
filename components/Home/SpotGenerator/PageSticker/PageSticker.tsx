import React from 'react';
import emojis from '../../../../constants/emojis';
import themes from '../../../../constants/themes';
import type { Emoji } from '../../../../constants/emojis';
import * as $ from './PageStickerView';

const PageSticker: React.FC = () => {
  // @see Flex로 Flexible Grid 정렬을 하기 위한, 더미 아이템 요소를 4n개에 맞게 추가
  const emojisToGrid: Emoji[] = [null, null, null, null].reduce(
    (emojisToGrid, dummy) => {
      if (emojisToGrid.length % 4 !== 0) emojisToGrid.push(dummy);
      return emojisToGrid;
    },
    emojis
  );

  return (
    <$.PageSticker>
      <$.AreaFilter>
        <$.HelpTitle>스티커를 원하는 장소에 붙여보세요</$.HelpTitle>
        <$.HelpText>
          무드 탭을 선택해 스티커로 장소의 무드를 표현해보세요
        </$.HelpText>
        <$.ThemeList>
          {themes.map((theme, i) => (
            <$.ThemeItem key={`theme-button-${i}`}>
              <$.ThemeButton color={theme.color}>{theme.label}</$.ThemeButton>
            </$.ThemeItem>
          ))}
        </$.ThemeList>
      </$.AreaFilter>
      <$.AreaEmoji>
        <$.EmojiList>
          {emojisToGrid.map((emoji, i) => (
            <$.EmojiItem key={`emoji-button-${i}`}>
              {emoji && (
                <$.EmojiButton>
                  <$.EmojiImage src={emoji.imageUrl} />
                </$.EmojiButton>
              )}
            </$.EmojiItem>
          ))}
        </$.EmojiList>
      </$.AreaEmoji>
      <$.AreaButton>
        <$.NextButton>다음으로</$.NextButton>
      </$.AreaButton>
    </$.PageSticker>
  );
};

export default PageSticker;
