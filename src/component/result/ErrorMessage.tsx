import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
  isError: Error;
}
function ErrorMessage({ isError }: ErrorMessageProps) {
  console.log(isError.message);
  return (
    <Styled.Root>
      <Styled.CommonMessage>
        로딩 중 에러가 발생하였습니다.
      </Styled.CommonMessage>
      <Styled.SpecificMessage>
        에러 원인 : {isError.message}
      </Styled.SpecificMessage>
    </Styled.Root>
  );
}

export default ErrorMessage;

const Styled = {
  Root: styled.div``,
  CommonMessage: styled.div``,
  SpecificMessage: styled.div``,
};
