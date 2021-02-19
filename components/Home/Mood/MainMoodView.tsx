import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const MainMood = styled.div`
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 15px;
  z-index: 5;
`;

export const MoodDropDownBtn = styled.img.attrs({
  src: '/FAB.png',
})`
  cursor: pointer;
`;

export const MoodBtnsContainer = styled.div`
  background-color: white;
  width: 230px;
  height: 40px;
  position: absolute;
  top: 25px;
  right: 77px;
  z-index: 4;
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  padding: 0 5px;
  ${(props) =>
    props['is-moodShow'] &&
    `
    display:none;
    `}
`;

export const MoodButton = styled.button`
  border: none;
  outline: none;
  padding: 8px 16px;
  margin-right: 10px;
  border: 1px solid ${painter.grayscale['3']};
  border-radius: 16px;
  cursor: pointer;
  background-color: ${painter.basic.white};
  ${(props) =>
    props['mood-selected'] &&
    `
  `}
  &:hover {
    color: ${painter.basic.white};
  }
`;

export const MoodBtn = styled.img.attrs((props) => ({
  src: props.src,
}))`
  cursor: pointer;
  ${(props) =>
    props['mood-selected'] &&
    `
    border: 2px solid ${painter.grayscale['8']};
  border-radius: 20px;
    `}
`;
