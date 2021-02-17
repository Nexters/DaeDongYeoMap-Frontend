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
  height: 45px;
  left: 96px;
  top: 20px;
  display: flex;
  border: none
  border-radius: 8px 8px 0 0;
  outline: none;
  background-color: ${painter.basic.white};
  &::focus {
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
  height: 515px;
  left: 96px;
  top: 80px;
  padding-bottom: 10px;
`;

export const SearchGrayImg = styled.img.attrs({
  src: '/search_gray.png',
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

export const SearchIcon = styled.img.attrs({
  src: '/search_pink.png',
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
  width: 155px;
  height: 45px;
  left: 512px;
  top: 20px;
  z-index: 5;
  color: white;
  align-text: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;

export const SpotButtonImg = styled.img.attrs({
  src: '/spot_add.png',
})``;

export const SpotButtonDiv = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const EnterDiv = styled.div`
  background-color: #fff;
  z-index: 4;
  position: absolute;
  width: 430px;
  height: 722px;
  left: 7px;
  top: 0px;
  padding: 70px 24px 15px 25px;
  margin-left: 65px;
`;

export const CloseBtn = styled.button`
  z-index: 5;
  position: absolute;
  top: 300px;
  left: 500px;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 0 8px 8px 0;
  width: 32px;
  height: 88px;
  cursor: pointer;
`;
export const CloseIcon = styled.img.attrs({
  src: '/close_div.png',
})``;

export const SearchContainer = styled.div`
  position: absolute;
  top: 110px;
  left: 0px;
  width: 100%;
`;

export const CustomBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 75px;
  left: 120px;
`;

export const CustomBtn = styled.button`
  display: inline-block;
  margin-right: 15px;
  outline: none;
  border: none;
  border-radius: 7px;
  transition: 0.2s;
  cursor: pointer;
  align-text: center;
  padding: 6px 8px;
  background-color: #fff;
  color: ${painter.grayscale['6']};

  ${(props) =>
    props['spot-selected'] &&
    `
    color:  ${painter.basic.white(props)};
    background-color: ${painter.grayscale['8'](props)};
    `}
  &:hover {
    background-color: ${painter.grayscale['8']};
    color: ${painter.basic.white};
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

export const NoSpotsContainer = styled.div`
  padding: 0 40px 0 40px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoSpots = styled.div`
  font-size: 15px;
  font-family: ${painter.font.roboto};
  font-weight: bold;
  color: ${painter.grayscale['9']};
`;

export const SearchAgain = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-family: ${painter.font.roboto};
  font-weight: bold;
  color: ${painter.grayscale['7']};
`;

export const PageDiv = styled.div`
  position: absolute;
  top: 685px;
  left: 80px;
  width: 250px;
  height: 20px;
  background-color: green;
`;
