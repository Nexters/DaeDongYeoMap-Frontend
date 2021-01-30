import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SearchDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 20px;
  z-index: 3;
  display: flex;
`;

export const SearchForm = styled.form`
  display: flex;
  border: none;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  background-color: #fff;
`;

export const InputField = styled.input`
  width: 270px;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  border: none;
  outline: none;
  font-family: ${painter.font.roboto};
  font-weight: bold;
  color: ${painter.grayscale['9']};
  ::placeholder {
    color: ${painter.grayscale['6']};
  }
`;

export const TempImg = styled.img.attrs({
  src: '/search.png',
})`
  width: 32px;
  height: 32px;
  margin: 8px 7px 0 15px;
`;

export const SpotButton = styled.button`
  outline: none;
  border: none;
  border-radius: 9px;
  background-color: ${painter.primary.basic};
  padding: 10px;
  margin-left: 7px;
  cursor: pointer;
`;

export const SpotButtonImg = styled.img.attrs({
  src: '/createSpot.png',
})``;
