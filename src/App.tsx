import React, { useState } from "react";
import Table from "./components/Table/Table";
import "./index.css";
import "./fonts.css";
import Search from "./components/Search/Search";
import { useGetPostsQuery } from "./store/rtk/backend.api";

function App() {
  const [currentPage, setCurrenPage] = useState("1");
  const [searchText, setSearchText] = useState('')
  console.log(searchText, 'qwe')

  const { data } = useGetPostsQuery(`${currentPage}`);

  return (
    <div className="App">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Table
        searchText={searchText}
        data={data!}
        currentPage={currentPage}
        setCurrenPage={setCurrenPage}
      />
    </div>
  );
}

export default App;
