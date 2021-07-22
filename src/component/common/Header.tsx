import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Styled.Root>
      <Styled.Text>NASA 사진 검색 어플리케이션</Styled.Text>
    </Styled.Root>
  );
}

export default Header;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 90px;
    background: #6a6a6a;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.div`
    font-family: Roboto;
    font-size: 36px;
    color: #ffffff;
  `,
};
