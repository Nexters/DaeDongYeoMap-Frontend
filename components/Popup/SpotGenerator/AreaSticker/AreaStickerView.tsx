import React from 'react';
import styled from 'styled-components';

export const AreaSticker = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
  padding-top: 10px;
`;

export const StickerList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 13px;
`;

export const StickerItem = styled.li`
  flex-shrink: 0;
  flex-grow: 0;
  &:nth-child(n + 4) {
    margin-top: 32px;
  }
  &:nth-child(3n + 2),
  &:nth-child(3n + 3) {
    margin-left: 25px;
  }
  width: 120px;
  height: 120px;
`;

export const StickerButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  position: relative;
  width: 120px;
  height: 120px;
  ${(props) =>
    props['aria-selected'] &&
    `
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border: 5px solid ${props.theme.primary.basic};
    border-radius: 50%;
  }
  `}
`;

export const StickerImage = styled.img.attrs({ width: '64', height: '64' })`
  display: block;
`;
