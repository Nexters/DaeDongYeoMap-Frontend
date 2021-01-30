import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const MainMood = styled.div`
  display: inline-block;
  position: absolute;
  top: 40px;
  right: 15px;
  z-index: 3;
`;

export const MoodButton = styled.button`
  border: none;
  outline: none;
  padding: 8px 16px;
  margin-right: 10px;
  border: 1px solid ${painter.grayscale['3']};
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.25s;
  background-color: ${painter.basic.white};
  color: ${(props) => painter.secondary[props.color]};
  &:hover,
  &:focus {
    background-color: ${(props) => painter.secondary[props.color]};
    color: ${painter.basic.white};
  }
`;
