import { useState } from "react";
import { useSelector } from "react-redux";
import { Post } from "../../models/models";
import { RootState } from "../../store";
import { useGetPostsQuery } from "../../store/rtk/backend.api";
import style from "./table.module.css";

interface TableProps {
  data: Post[]
  setCurrenPage: Function
  currentPage: string
}

const Table: React.FC<TableProps> = ({data, currentPage,setCurrenPage,}) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const searchText = useSelector((state: RootState) => state.search.searchText)


  const nextPage = () => {
    if(Number(currentPage) <= 9){
    setCurrenPage(String(Number(currentPage) + 1));
    } else setCurrenPage(String(Number(currentPage) + 0));
  };

  const prevPage = () => {
    if(Number(currentPage) >= 2){
    setCurrenPage(String(Number(currentPage) - 1));
    } else setCurrenPage(String(Number(currentPage) - 0));
  };

  

  console.log(currentPage);

  return (
    <div className={`${style.container}`}>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Заголовок</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {data?.filter((elem) => {
            return searchText.toLowerCase() === ''? elem : elem.body.toLowerCase().includes(searchText) || elem.title.toLowerCase().includes(searchText)
          }).map((elem) => (
            <tr key={elem.id}>
              <td className={style.id}>{elem.id}</td>
              <td>{elem.title}</td>
              <td className={style.body}>{elem.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.pagination}>
        <button
          disabled={prevDisabled}
          className={style.btn__nav}
          onClick={prevPage}
        >
          Назад
        </button>
        <button
          disabled={nextDisabled}
          className={style.btn__nav}
          onClick={nextPage}
        >
          Далее
        </button>
      </div>
    </div>
  );
};
export default Table;
