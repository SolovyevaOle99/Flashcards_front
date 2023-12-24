import React from "react";
import style from './Search.module.css';

const Search = () => {

    return (
        <input className={style.Search_text} type="text" placeholder="Поиск по терминам"></input>
    );
} 

export default Search;