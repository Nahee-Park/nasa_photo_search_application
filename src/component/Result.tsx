import React from "react";
import useSWR from "swr";
import { client } from "../lib/api";
import Pending from "./result/Pending";
import ErrorMessage from "./result/ErrorMessage";
import CardView from "./result/CardView";
import { keywordAtom, searchedDataAtom } from "../states";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IItems } from "../types";

function Result() {
  const keyword = useRecoilValue(keywordAtom);
  const setSearchedData = useSetRecoilState(searchedDataAtom);
  const getData = (keyword: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR<{ data: IItems }>(
      `/search?q=${keyword}`,
      client.get
    );
    console.log(error);
    console.log("data나와랏 ", data?.data?.collection.items);
    setSearchedData(data?.data?.collection.items);
    return {
      searchData: data,
      isLoading: !error && !data,
      isError: error,
    };
  };

  const { isLoading, isError } = getData(keyword);
  if (isLoading) return <Pending />;
  else if (isError !== undefined) return <ErrorMessage isError={isError} />;
  else return <CardView />;
}

export default Result;
