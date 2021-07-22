import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
  isError: Error;
}
function ErrorMessage({ isError }: ErrorMessageProps) {
  console.log(isError.message);
  return (
    <Styled.Root>
      <Styled.Message>
        로딩 중 에러가 발생하였습니다.
        <br />
        에러 원인 : {isError.message}
      </Styled.Message>
    </Styled.Root>
  );
}

export default ErrorMessage;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Message: styled.div`
    width: 40%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #414141;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    color: white;
  `,
};
