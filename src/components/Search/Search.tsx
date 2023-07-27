import React from "react";
import style from "./search.module.css";
import searchIcon from "./../../img/search-svgrepo-com 1.svg";
import { useGetPostsQuery } from "../../store/rtk/backend.api";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../store/slice/searchSlice";

interface SearchProps {
  
}

const Search: React.FC<SearchProps> = ({}) => {

  const dispatch = useDispatch()
    useGetPostsQuery('2')

  return (
    <div className={`container ${style.container}`}>
      <div className={style.search}>
        <input onChange={(e)=> dispatch(setSearchText(e.target.value))} className={style.input} type="text" placeholder="Поиск" />
        <img className={style.search_btn} src={searchIcon} alt="" />
      </div>
    </div>
  );
};
export default Search;
