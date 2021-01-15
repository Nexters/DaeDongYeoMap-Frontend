import React from 'react';
import styled from 'styled-components';

export const Title = styled.div`
  position: relative;
  height: 7rem;
  border-top-left-radius: 2.5rem;
  background-color: #01e3ab;
`;

export const Text = styled.h3`
  padding-left: 2.5rem;
  font-size: 2rem;
  line-height: 7rem;
  color: #fff;
`;

export const CloseLayerButton = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  width: 7rem;
  height: 7rem;
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
    width: 1.68rem;
    height: 0.18rem;
    margin: auto;
    background-color: #fff;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
