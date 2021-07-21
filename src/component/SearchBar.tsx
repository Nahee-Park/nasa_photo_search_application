import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { isSearchedAtom, keywordAtom } from "../states";
import { useSetRecoilState } from "recoil";

function SearchBar() {
  const [inputValue, setinputValue] = useState<string>("");
  const setIsSearched = useSetRecoilState(isSearchedAtom);
  const setKeyword = useSetRecoilState<string>(keywordAtom);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setinputValue(e.target.value);
  };
  const onSubmit = () => {
    setKeyword(inputValue);
    setIsSearched(true);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="검색어를 입력하세요"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={inputValue}
        onChange={changeHandler}
        onSubmit={onSubmit}
      />
      <Button variant="outline-secondary" id="button-addon2" onClick={onSubmit}>
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
