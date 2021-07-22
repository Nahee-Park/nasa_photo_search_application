import React from "react";
import Result from "./component/Result";
import SearchBar from "./component/SearchBar";
import { isSearchedAtom } from "../src/states";
import { useRecoilValue } from "recoil";
import DefaultCard from "./component/DefaultCard";
import Header from "./component/common/Header";

function App() {
  const isSearched = useRecoilValue(isSearchedAtom);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      {isSearched ? <Result /> : <DefaultCard />}
    </div>
  );
}

export default App;
