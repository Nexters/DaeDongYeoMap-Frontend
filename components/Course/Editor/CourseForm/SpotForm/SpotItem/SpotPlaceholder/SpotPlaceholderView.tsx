import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SpotPlaceholder = styled.div<{
  isPressed: boolean;
}>`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: ${(props) =>
    props.isPressed ? 'rgb(253, 71, 110, 0.06)' : props.theme.basic.white};
`;

export const AreaSticker = styled.div`
  height: 108px;
  padding-top: 18px;
  border-bottom: 1px solid ${painter.grayscale[3]};
  text-align: center;
`;

export const StickerPlaceholder = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px dashed ${painter.grayscale[6]};
  margin: 0 auto;
  &::before {
    content: '';
    display: block;
    width: 58px;
    height: 58px;
    margin: 5px auto 0;
    border-radius: 50%;
    background-color: ${painter.grayscale[3]};
  }
`;

export const AreaDescription = styled.div`
  height: 60px;
  padding-top: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  word-break: keep-all;
  color: ${painter.grayscale[6]};
`;
