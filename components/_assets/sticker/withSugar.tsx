import styled from 'styled-components';
import painter from '~/styles/theme/painter';
import type {
  StickerComponent,
  StickerWithSugarComponent,
  StickerWithSugarProps,
} from './Sticker.d';
import type { Sugar } from '~/constants/sugar';

const $IconWrap = styled.div<StickerWithSugarProps>`
  display: inline-block;
  width: ${(props) => props.width ?? 120}px;
  height: ${(props) => props.height ?? 120}px;
  border-radius: 50%;
  background-color: ${(props) => painter.secondary[props.sugar](props)};
  vertical-align: top;
`;

const withSugar = (
  StickerIcon: StickerComponent,
  sugar: Sugar
): StickerWithSugarComponent => {
  const WithSugarComponent: StickerWithSugarComponent = (props) => (
    <$IconWrap {...props} sugar={sugar}>
      <StickerIcon width={props.width} height={props.height} />
    </$IconWrap>
  );

  return WithSugarComponent;
};

export default withSugar;
