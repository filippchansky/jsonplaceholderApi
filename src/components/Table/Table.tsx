import { useState } from "react";
import { useGetPostsQuery } from "../../store/rtk/backend.api";
import style from "./table.module.css";

interface TableProps {}

const Table: React.FC<TableProps> = ({}) => {
  const [currentPage, setCurrenPage] = useState("1");
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

  const { data } = useGetPostsQuery(`${currentPage}`);

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
          {data?.map((elem) => (
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
