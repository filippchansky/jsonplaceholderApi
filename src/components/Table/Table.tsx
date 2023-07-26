import { useState } from "react";
import { Post } from "../../models/models";
import { useGetPostsQuery } from "../../store/rtk/backend.api";
import style from "./table.module.css";

interface TableProps {
  data: Post[]
  setCurrenPage: Function
  currentPage: string
  searchText: string
}

const Table: React.FC<TableProps> = ({data, currentPage,setCurrenPage, searchText}) => {
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(false);


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
