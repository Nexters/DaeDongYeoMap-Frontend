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
  margin-top: 2.5rem;
`;

export const EmojiItem = styled.li`
  flex-shrink: 0;
  flex-grow: 0;
  &:nth-child(n + 5) {
    margin-top: 2rem;
  }
  &:nth-child(4n + 2),
  &:nth-child(4n + 3),
  &:nth-child(4n + 4) {
    margin-left: 3rem;
  }
  width: 4rem;
  height: 4rem;
`;

export const EmojiButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  width: 4rem;
  height: 4rem;
`;

export const EmojiImage = styled.img.attrs({ width: '64', height: '64' })`
  display: block;
`;
