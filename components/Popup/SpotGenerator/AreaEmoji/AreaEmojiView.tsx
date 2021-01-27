import React from 'react';
import styled from 'styled-components';

export const AreaEmoji = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y: auto;
`;

export const EmojiList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const EmojiItem = styled.li`
  flex-shrink: 0;
  flex-grow: 0;
  &:nth-child(n + 5) {
    margin-top: 32px;
  }
  &:nth-child(4n + 2),
  &:nth-child(4n + 3),
  &:nth-child(4n + 4) {
    margin-left: 48px;
  }
  width: 64px;
  height: 64px;
`;

export const EmojiButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  position: relative;
  width: 64px;
  height: 64px;
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

export const EmojiImage = styled.img.attrs({ width: '64', height: '64' })`
  display: block;
`;
