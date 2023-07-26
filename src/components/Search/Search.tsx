import React from "react";
import style from "./search.module.css";
import searchIcon from "./../../img/search-svgrepo-com 1.svg";
import { useGetPostsQuery } from "../../store/rtk/backend.api";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {

    useGetPostsQuery('2')

  return (
    <div className={`container ${style.container}`}>
      <div className={style.search}>
        <input className={style.input} type="text" placeholder="Поиск" />
        <img className={style.search_btn} src={searchIcon} alt="" />
      </div>
    </div>
  );
};
export default Search;
