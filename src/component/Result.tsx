import React from "react";
import useSWR from "swr";
import { client } from "../lib/api";
import Pending from "./result/Pending";
import ErrorMessage from "./result/ErrorMessage";
import CardView from "./result/CardView";
import { keywordAtom } from "../states";
import { useRecoilValue } from "recoil";
import { IItems } from "../types";

function Result() {
  const keyword = useRecoilValue(keywordAtom);
  const getData = (keyword: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR<{ data: IItems }>(
      `/search?q=${keyword}`,
      client.get
    );
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  };

  const { data, isLoading, isError } = getData(keyword);

  if (isLoading) return <Pending />;
  else if (isError !== undefined) return <ErrorMessage isError={isError} />;
  else return <CardView />;
}

export default Result;
