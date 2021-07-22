import React, { ReactElement, useState } from "react";
import useSWR from "swr";
import { client } from "../../lib/api";
import { IItems, ArrayItems } from "../../types";
import EachCard from "../common/EachCard";
import styled from "styled-components";
import { Pagination } from "react-bootstrap";
import { keywordAtom } from "../../states";
import { useRecoilValue } from "recoil";
import Pending from "./Pending";
import ErrorMessage from "./ErrorMessage";

interface PageProps {
  index: number | undefined;
  keyword: string | undefined;
}
const Page = ({ index, keyword }: PageProps) => {
  const { data, error } = useSWR<{ data: IItems }>(
    `/search?q=${keyword}&page=${index}`,
    client.get
  );
  const isLoading = !error && !data;
  const isError = error;
  console.log(data?.data?.collection.items);
  if (isLoading) return <Pending />;
  else if (isError !== undefined) return <ErrorMessage isError={isError} />;
  else if (data?.data?.collection.items.length === 0)
    return <Styled.Empty>데이터가 없습니다.</Styled.Empty>;
  else
    return (
      <Styled.Card>
        {data?.data?.collection &&
          data?.data?.collection.items.map(
            (data: ArrayItems, index: React.Key) => {
              return <EachCard itemData={data} key={index} />;
            }
          )}
      </Styled.Card>
    );
};

function CardView(): ReactElement {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const keyword = useRecoilValue(keywordAtom);

  return (
    <Styled.Root>
      <Pagination>
        {pageIndex === 1 ? (
          <Pagination.Prev disabled />
        ) : (
          <Pagination.Prev onClick={() => setPageIndex(pageIndex - 1)} />
        )}
        <Page index={pageIndex} keyword={keyword} />
        <Pagination.Next onClick={() => setPageIndex(pageIndex + 1)} />
        <div style={{ display: "none" }}>
          <Page index={pageIndex + 1} keyword={keyword} />
        </div>
      </Pagination>
    </Styled.Root>
  );
}

export default CardView;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
  `,
  Card: styled.div`
    display: flex;
    justify-content: center;
    background: #f9fbfd;
    flex-wrap: wrap;
    height: 50%;
    width: 100%;
  `,
  Empty: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
