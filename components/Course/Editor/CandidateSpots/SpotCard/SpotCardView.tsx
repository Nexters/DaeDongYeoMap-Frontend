import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SpotCard = styled.div`
  position: relative;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 8px 1px ${painter.grayscale[3]};
  transform: translate(0, 0);
  ${(props) =>
    !props.draggable
      ? `
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.6);
  }
  `
      : `
  cursor: pointer;
  `}
`;

export const AreaSticker = styled.div`
  height: 108px;
  padding-top: 18px;
  border-bottom: 1px solid ${painter.grayscale[3]};
  text-align: center;
`;

export const AreaDescription = styled.div`
  height: 60px;
  padding-top: 8px;
`;

export const SpotTitle = styled.strong`
  display: block;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #222;
`;

export const SpotInfo = styled.div`
  height: 14px;
  margin-top: 4px;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  color: ${painter.grayscale[6]};
`;

export const Partner = styled.span`
  display: inline-block;
  height: 14px;
  vertical-align: top;
`;

export const Timestamp = styled.span`
  display: inline-block;
  height: 14px;
  vertical-align: top;
  &::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    margin: 6px 4px 0;
    border-radius: 50%;
    background-color: ${painter.grayscale[6]};
    vertical-align: top;
  }
`;
