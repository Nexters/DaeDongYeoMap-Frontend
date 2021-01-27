import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const Title = styled.div`
  position: relative;
  height: 112px;
  border-top-left-radius: 40px;
  background-color: ${painter.primary.basic};
`;

export const Text = styled.h3`
  padding-left: 40px;
  font-size: 32px;
  line-height: 112px;
  color: ${painter.basic.white};
`;

export const CloseLayerButton = styled.a.attrs({ href: '#', role: 'button' })`
  position: absolute;
  top: 0;
  right: 0;
  width: 112px;
  height: 112px;
  outline: none;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 27px;
    height: 3px;
    margin: auto;
    background-color: ${painter.basic.white};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
