import React from "react";
import './Search.css';
import search_img from '../search.png';

function Search(props) {
    const imgClick = () => {
        const input = document.getElementById('inpt_search');
        if (input.value.trim()) {
            props.onSearch(input.value);
        }
    }
    const EnterPress = (event) => {
        if (event.key = 'Enter') {
            imgClick();
        }
    }


    return (
        <div class="container_search">
            <input type="text" id="inpt_search" placeholder="Введите название фильма" onKeyPress={EnterPress}></input>
            <img src={search_img} alt="Search" id="img_search" onClick={imgClick} />
        </div>
    )
}

export default Search;