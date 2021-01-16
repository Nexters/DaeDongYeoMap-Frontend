import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@material-ui/lab';

//지도 데이터 정보 받아오기
interface PlaceType {
  name: string;
  category: string;
  address: string;
}

const PlaceList: PlaceType[] = [
  { name: "에버랜드", category: "테마파크", address: "경기도 용인시" },
  { name: "롯데월드", category: "테마파크", address: "서울특별시" },
  { name: "서울랜드", category: "테마파크", address: "서울특별시" },
  //searchPlacesByKeywordId 리턴값을 PlaceList에 넣어주기
];

export default function SearchPlace() {
  return (
    <div style={{ width: 300, position:"absolute", top: "10px", left: "50px" }}>
      <Autocomplete
        freeSolo
        id="search-place"
        disableClearable
        options={PlaceList.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="장소 검색하고 스팟찍기"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}