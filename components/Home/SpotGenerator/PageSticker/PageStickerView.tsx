import React from 'react';
import styled from 'styled-components';

export const PageSticker = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 7rem);
  padding: 2.5rem 2rem 3rem;
`;

export const AreaFilter = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const HelpTitle = styled.strong`
  display: block;
  font-size: 1.5rem;
  color: #666;
`;

export const HelpText = styled.p`
  margin-top: 0.5rem;
  padding-left: 0.2rem;
  font-size: 1.125rem;
  color: #a6a6a6;
`;

export const ThemeList = styled.ul`
  margin-top: 1.875rem;
  font-size: 0;
`;

export const ThemeItem = styled.li`
  display: inline-block;
  vertical-align: top;
  & + & {
    margin-left: 0.75rem;
  }
`;

export const ThemeButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 2.5rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #d0d0d0;
  padding: 0 1.25rem;
  font-size: 1rem;
  line-height: ${2.5 - 0.0625}rem;
  background-color: #fff;
  color: ${(props) => props.color};
`;

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

export const AreaButton = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;

export const NextButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 4rem;
  border-radius: 0.75rem;
  background-color: #101721;
  font-size: 1.25rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
`;
