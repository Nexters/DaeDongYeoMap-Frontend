import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SearchDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 20px;
  z-index: 5;
  display: flex;
  border: 2px solid blue;
`;

export const SearchForm = styled.form`
  z-index: 5;
  position: absolute;
  width: 400px;
  height: 48px;
  left: 96px;
  top: 32px;
  display: flex;
  border: none;
  border-radius: 8px 8px 0 0;
  outline: none;
  background-color: ${painter.basic.white};
  ::focus {
    border: 2px solid ${painter.primary.basic};
  }
`;

export const InputField = styled.input`
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
  z-index: 5;
  border-top: 1px solid ${painter.grayscale['5']};
  border-radius: 0 0 8px 8px;
  background-color: ${painter.basic.white};
  position: absolute;
  width: 400px;
  height: 518px;
  left: 96px;
  top: 80px;
  padding-bottom: 10px;
`;

export const SearchGrayImg = styled.img.attrs({
  src: '/search3.png',
})``;

export const SpotsName = styled.div`
  color: ${painter.grayscale['9']};
  margin-left: 7px;
`;

export const SpotsCategory = styled.div`
  color: ${painter.grayscale['6']};
  font-size: 14px;
  margin-left: 10px;
`;

export const PlacesAndSpotsItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: ${painter.font.roboto};
  font-weight: bold;
  padding: 8px;
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

export const SearchImg = styled.img.attrs({
  src: '/search4.png',
})`
  margin: 8px 7px 0 8px;
`;

export const SpotButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${painter.primary.basic};
  cursor: pointer;
  position: absolute;
  width: 176px;
  height: 48px;
  left: 512px;
  top: 32px;
  z-index: 5;
  color: white;
  align-text: center;
`;

export const SpotButtonImg = styled.img.attrs({
  src: '/createSpot.png',
})``;

export const EnterDiv = styled.div`
  background-color: #fff;
  z-index: 4;
  position: absolute;
  width: 440px;
  height: 1024px;
  left: 0px;
  top: 0px;
  padding: 70px 24px 15px 25px;
  margin-left: 65px;
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: 166px;
  left: 0px;
  width: 100%;
`;

export const CustomBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 95px;
  left: 120px;
`;

export const CustomBtn = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 8px;
  transition: 0.2s;
  background-color: #fff;
  color: ${painter.grayscale['6']};
  cursor: pointer;
  align-text: center;
  padding: 9px 8px;
  &:hover {
    background-color: ${painter.grayscale['8']};
    color: white;
  }
`;

export const searchedSpots = styled.li`
  padding: 10px 0 10px 35px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-family: ${painter.font.roboto};
  font-weight: bold;
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

export const SpotImg = styled.img.attrs({
  src: '/spot.png',
})``;

export const SpotsInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`;

export const SpotsNameAndCategory = styled.div`
  display: flex;
`;

export const SpotsAddress = styled.div`
  color: ${painter.grayscale['8']};
  margin-left: 7px;
  margin-top: 4px;
  font-size: 13px;
  font-family: ${painter.font.roboto};
`;
