import React, { ReactElement } from "react";
import useSWR from "swr";
import { client } from "../lib/api";
import { defaultDataAtom } from "../states";
import { useRecoilState } from "recoil";
import { IItems } from "../types";
import EachCard from "./common/EachCard";
import ErrorMessage from "./result/ErrorMessage";
import styled from "styled-components";
function DefaultCard(): any {
  const [defaultData, setDefaultData] = useRecoilState(defaultDataAtom);

  const { data, error } = useSWR<{ data: IItems }>(
    `/search?q=galaxy`,
    client.get
  );
  setDefaultData(data?.data?.collection.items);
  //id 값을 인덱스로, title, image, data_createm, description
  // eslint-disable-next-line no-lone-blocks
  console.log(data?.data?.collection.items.length);

  //   defaultData[0] ? (
  //     defaultData.map((data: any, index: React.Key) => {
  //       return (
  //         <Styled.Root>
  //           <EachCard data={data} key={index} />
  //         </Styled.Root>
  //       );
  //     })
  //   ) : (
  //     <Styled.Root>
  //       <ErrorMessage isError={error} />
  //     </Styled.Root>
  //   );
  return <EachCard />;
}

export default DefaultCard;

const Styled = {
  Root: styled.div``,
};
