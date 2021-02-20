import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SearchForm = styled.form`
  z-index: 5;
  position: absolute;
  width: 320px;
  height: 40px;
  left: 95px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: ${painter.basic.white};
  ${(props) =>
    props['is-focused'] &&
    `
    border: 2px solid ${painter.primary.basic(props)};
    `}
  ${(props) =>
    props['is-autocomplete'] &&
    `
    border-radius: 8px 8px 0 0;
    border-bottom:none;
      `}
`;

export const InputField = styled.input`
  font-size: 16px;
  font-weight: bold;
  font-family: ${painter.font.roboto};
  padding: 10px 0;
  width: 250px;
  border: none;
  outline: none;
  color: ${painter.grayscale['9']};
  ::placeholder {
    color: ${painter.grayscale['6']};
  }
`;

export const ResetKeyword = styled.img.attrs({
  src: '/close_btn.png',
})`
  cursor: pointer;
`;

export const PlacesAndSpots = styled.ul`
  list-style: none;
  z-index: 5;
  border-top: 1px solid ${painter.grayscale['5']};
  border-radius: 0 0 8px 8px;
  border-bottom: 2px solid ${painter.primary.basic};
  border-left: 2px solid ${painter.primary.basic};
  border-right: 2px solid ${painter.primary.basic};
  background-color: ${painter.basic.white};
  position: absolute;
  width: 320px;
  height: 285px;
  left: 95px;
  top: 60px;
  padding-bottom: 10px;
  ${(props) =>
    props['no-data'] &&
    `
    display:none;
    `}
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
  margin-left: 8px;
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
  width: 24px;
  height: 24px;
  margin: 0 7px;
`;

export const SpotButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: ${painter.primary.basic};
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 40px;
  left: 450px;
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
  background-color: ${painter.basic.white};
  z-index: 4;
  width: 370px;
  height: 100%;
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  justify-content: space-around;
`;

export const CloseBtn = styled.button`
  z-index: 5;
  background-color: ${painter.basic.white};
  outline: none;
  border: none;
  border-radius: 0 8px 8px 0;
  width: 32px;
  height: 88px;
  cursor: pointer;
  overflow: auto;
  align-self: center;
`;
export const CloseIcon = styled.img.attrs({
  src: '/close_div.png',
})``;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
`;

export const CustomBtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const CustomBtn = styled.button`
  display: inline-block;
  margin: 0 5px;
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
  padding: 10px 0 10px 20px;
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
  margin-left: 3px;
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
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const PrevPage = styled.img.attrs({
  src: '/prev_page.png',
})`
  cursor: pointer;
`;

export const NextPage = styled.img.attrs({
  src: '/next_page.png',
})`
  cursor: pointer;
`;

export const PageNum = styled.span`
  margin: 0 2px;
  cursor: pointer;
  color: ${painter.grayscale['6']};
  ${(props) =>
    props['page-selected'] &&
    `
    color: ${painter.grayscale['9'](props)};
    font-weight: bold;
    `}
`;

export const Test = styled.div`
  display: flex;
  justify-content: flex-start;
  z-index: 4;
  position: absolute;
  left: 72px;
  top: 0px;
  height: 100vh;
`;
