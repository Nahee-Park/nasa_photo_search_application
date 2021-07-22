import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { isSearchedAtom, keywordAtom } from "../states";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

function SearchBar() {
  const [inputValue, setinputValue] = useState<string>("");
  const setIsSearched = useSetRecoilState(isSearchedAtom);
  const setKeyword = useSetRecoilState<string>(keywordAtom);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };
  const onSubmit = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setKeyword(inputValue);
    setIsSearched(true);
  };

  return (
    <InputGroup className="mb-3">
      <Styled.Form>
        <form style={{ width: "80%" }} onSubmit={onSubmit}>
          <FormControl
            placeholder="검색어를 입력하세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={changeHandler}
          />
        </form>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={onSubmit}
        >
          Search
        </Button>
      </Styled.Form>
    </InputGroup>
  );
}

export default SearchBar;

const Styled = {
  Form: styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
