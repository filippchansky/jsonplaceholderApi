import React, { useState } from "react";
import Table from "./components/Table/Table";
import "./index.css";
import "./fonts.css";
import Search from "./components/Search/Search";
import { useGetPostsQuery } from "./store/rtk/backend.api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const [currentPage, setCurrenPage] = useState("1");

  const searchInfo = useSelector((state:RootState) => state.search.searchText)
  

  console.log(searchInfo)

  const { data } = useGetPostsQuery(`${currentPage}`);


  return (
    <div className="App">
      <Search />
      <Table
        data={data!}
        currentPage={currentPage}
        setCurrenPage={setCurrenPage}
      />
    </div>
  );
}

export default App;
