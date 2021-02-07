import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
`;

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
  border-radius: 6px 6px 0 0;
  outline: none;
  box-sizing: border-box;
  background-color: ${painter.basic.white};
`;

export const InputField = styled.input`
  width: 240px;
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

export const PlacesAndSpots = styled.ul`
  list-style: none;
  z-index: 3;
  border-top: 1px solid ${painter.grayscale['5']};
  border-radius: 0 0 6px 6px;
  background-color: ${painter.basic.white};
  width: 292px;
  position: absolute;
  top: 82px;
  left: 20px;
  padding-bottom: 10px;
`;

export const Places = styled.div`
  color: ${painter.grayscale['7']};
  padding: 10px 5px 7px 5px;
`;

export const Spots = styled.div`
  color: ${painter.grayscale['7']};
  border-top: 1px solid ${painter.grayscale['5']};
  padding: 10px 5px 7px 5px;
  margin-top: 10px;
`;

export const PlacesAndSpotsItem = styled.li`
  display: block;
  font-size: 15px;
  font-family: ${painter.font.roboto};
  font-weight: bold;
  padding: 7px 5px 7px 5px;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  color: ${painter.grayscale['9']};
  .active {
    border-bottom: solid 3px ${painter.grayscale['3']};
  }
  &:hover {
    background-color: rgba(255, 159, 179, 0.25);
  }
`;

export const AddressDiv = styled.div`
  margin-top: 3px;
  color: ${painter.grayscale['8']};
  font-size: 13px;
  font-family: ${painter.font.roboto};
`;

export const TempImg = styled.img.attrs({
  src: '/search.png',
})`
  width: 30px;
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
