import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SpotForm = styled.div`
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SpotItem = styled.div<{
  flexable?: boolean;
}>`
  position: relative;
  ${(props) =>
    props.flexable
      ? `
  z-index: 0;
  flex-grow: 1;
  flex-shrink: 1;
  `
      : `
  z-index: 1;
  flex-grow: 0;
  flex-shrink: 0;
  `}
  height: 208px;
`;

export const SpotOrder = styled.em`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background-color: ${painter.grayscale[5]};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  color: ${painter.basic.white};
`;

export const SpotCard = styled.div<{
  isLayout?: boolean;
}>`
  width: 168px;
  height: 168px;
  ${(props) =>
    !props.isLayout &&
    `
  border-radius: 16px;
  box-shadow: 0 0 8px 1px ${painter.grayscale[3](props)};
  vertical-align: top;
  `}
`;

export const LineColumn = styled.div<{
  isLayout?: boolean;
}>`
  width: 100%;
  height: 100%;
  ${(props) =>
    !props.isLayout &&
    `
  &::after {
    content: '';
    position: absolute;
    top: 114px;
    left: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed ${painter.grayscale[6](props)};
  }
  `}
`;

// 47 - line - 47
const LineRowWrap = styled.div`
  position: relative;
  height: 95px;
  margin: 0 84px -10px;
`;

const LineSide = styled.div`
  position: absolute;
  overflow: hidden;
  width: 47px;
  height: 47px;
  &::before {
    content: '';
    position: absolute;
    width: 94px;
    height: 94px;
    border-radius: 50%;
    border: dashed ${painter.grayscale[6]};
  }
`;

const LineRowLeft = styled(LineSide)`
  top: 48px;
  left: 0;
  &::before {
    top: 0;
    left: 0;
    border-width: 1px 0 0 1px;
  }
`;

const LineRowRight = styled(LineSide)`
  top: 2px;
  right: 0;
  &::before {
    bottom: 0;
    right: 0;
    border-width: 0 1px 1px 0;
  }
`;

const LineRowMiddle = styled.div`
  position: absolute;
  top: 48px;
  left: 48px;
  right: 47px;
  height: 1px;
  border-bottom: 1px dashed ${painter.grayscale[6]};
`;

export const LineRow: React.FC = () => {
  return (
    <LineRowWrap>
      <LineRowLeft />
      <LineRowMiddle />
      <LineRowRight />
    </LineRowWrap>
  );
};

export const SpotDummyItem: React.FC = () => {
  return (
    <>
      <SpotItem flexable={true}>
        <LineColumn isLayout={true} />
      </SpotItem>
      <SpotItem flexable={false}>
        <SpotCard isLayout={true} />
      </SpotItem>
    </>
  );
};
