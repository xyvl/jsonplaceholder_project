"use client";
import { useState } from "react";
import styles from "./searchPost.module.scss";
import { customDispatch, customSelector } from "@/hooks/redux";
import { filterPosts, sortPosts } from "@/store/slice/posts";

const SearchPost = ({setValue}: {setValue: (value: 1) => void}) => {
  const dispatch = customDispatch();
  const [search, setSearch] = useState("");
  const searchFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    (document.querySelector('.search_select') as HTMLSelectElement).value = '1';
    setValue(1)
    setSearch(e.currentTarget.value);
    dispatch(filterPosts(e.currentTarget.value));
  };

  interface IProps{
    arr: any,
    value: number
  }
  const props: IProps = {
    arr: customSelector(state => state.allPosts),
    value: 1
  }

  return (
    <div className="wrapper">
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          value={search}
          onChange={searchFunction}
          className={styles.search}
          type="search"
          name=""
          id=""
        />
        <input className={styles.btn} type="submit" value="Найти" />
        <select
          onChange={(e) => {
            props.value = parseInt(e.currentTarget.value);
            dispatch(sortPosts(props));
          }}
          className={`${styles.select} search_select`}
          name="sel"
        >
          <option value="1">Без сортировки</option>
          <option value="2">По возрастанию</option>
          <option value="3">По убыванию</option>
        </select>
      </form>
    </div>
  );
};

export default SearchPost;
