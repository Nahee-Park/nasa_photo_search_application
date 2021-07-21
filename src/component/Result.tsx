import React from "react";
import Card from "./common/Card";
import useSWR from "swr";
import { client } from "../lib/api";
import Pending from "./result/Pending";
import ErrorMessage from "./result/ErrorMessage";
import CardView from "./result/CardView";

interface IData {
  center: string;
  data_created: string;
  description: string;
  ketwords: string[];
  location: string;
  nasa_id: string;
  title: string;
}

// data 안의 collection 안에 있는 애들 타입 지정
interface IItems {
  data: {
    collection: {
      item: [{ href: string; data: IData[] }];
    };
  };
}

function Result() {
  // searchBar 컴포넌트에서 이 값을 받을 것임!
  const keyword = "Korea";
  const getData = (keyword: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR<{ data: IItems }>(
      `/search?q=${keyword}`,
      client.get
    );
    console.log("data나와랏 ", data);
    return {
      searchData: data,
      isLoading: !error && !data,
      isError: error,
    };
  };

  console.log("얘는 데이터 결과임", getData(keyword));
  //isSearched가 false이면 디폴트 데이터를 보냄
  //isSearched가 True이면 검색 결과 데이터를 보냄
  //전역으로 관리할 데이터 => isSearched / 디폴트 데이터 / searchData
  //아예 서치하기 전 상태 -> CardView 컴포넌트를 부르되 디폴트 데이터를 보냄
  //서치한 이후 상태 ->

  const { searchData, isLoading, isError } = getData(keyword);
  if (isLoading) return <Pending />;
  else if (isError !== undefined) return <ErrorMessage />;
  else return <CardView />;
}

export default Result;
