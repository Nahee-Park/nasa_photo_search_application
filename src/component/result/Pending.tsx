import React from "react";
import styled from "styled-components";

function Pending() {
  return <Styled.Root>로딩중입니다</Styled.Root>;
}

export default Pending;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
