import React from "react";
import Result from "./component/Result";
import SearchBar from "./component/SearchBar";
import { isSearchedAtom } from "../src/states";
import { useRecoilValue } from "recoil";
import Header from "./component/common/Header";

function App() {
  const isSearched = useRecoilValue(isSearchedAtom);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Result />
    </div>
  );
}

export default App;
