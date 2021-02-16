import React from 'react';
import styled from 'styled-components';
import type { StickerComponent } from './Sticker.d';

const $Image = styled.img`
  display: inline-block;
  width: ${(props) => props.width || 120}px;
  height: ${(props) => props.height || 120}px;
  vertical-align: top;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const Sticker: StickerComponent = ({ src, className, width, height }) => {
  return (
    <$Image src={src} className={className} width={width} height={height} />
  );
};

export default Sticker;
