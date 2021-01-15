import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto 56px;
  width: 48px;
  :hover {
    cursor: pointer;
  }
`;

export const IconImg = styled.img.attrs((props) => {
  src: props.src;
})`
  width: 48px;
  margin-bottom: 8px;
`;

export const IconText = styled.div<{ selected: boolean }>`
  color: ${(props) => (props.selected ? '#01E3AB' : '#D1D5DC')};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
`;
