import React from 'react';
import styled from 'styled-components';

export const SearchDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 20px;
  z-index: 3;
  display: flex;
`;

export const SearchForm = styled.form`
  display: flex;
  border: 2px solid #58ecc7;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  background-color: #fff;
`;

export const InputField = styled.input`
  width: 270px;
  height: 40px;
  font-size: 17px;
  padding: 10px;
  border: none;
  outline: none;
  ::placeholder {
    color: #93a2ae;
  }
`;

export const TempImg = styled.img.attrs({
  src: '/temp_img.png',
})`
  width: 25px;
  height: 25px;
  margin: 8px 7px 0 15px;
`;

export const SpotButton = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: #58ecc7;
  padding: 10px;
  margin-left: 7px;
  cursor: pointer;
`;

export const SpotButtonImg = styled.img.attrs({
  src: '/home_default.png',
})`
  width: 25px;
  height: 25px;
`;
