import React, {useEffect, useState} from 'react'
import {} from "@mui/material";
import {BarChart, SearchRounded, ShoppingCartRounded} from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux';
import { filtersSearchText } from '../redux/action';
import { selectorListCartItems } from '../redux/selector';

const Header = () => {
    const [searchText, setSearchText] = useState();

    const ListItemCart = useSelector(selectorListCartItems);

    let numberItemCart = 0;
    ListItemCart.forEach((item) => {
        numberItemCart += item.number;
    })

    const dispatch = useDispatch();

    const handleOnSearch = (e) => {
        dispatch(filtersSearchText(e.target.value));
        setSearchText(e.target.value);
    }

    useEffect(() => {
        const toggleMenu = document.querySelector(".toggleMenu");

        toggleMenu.addEventListener("click", () =>{
            document.querySelector(".rightMenu").classList.toggle("active");
        })
    }, [])

  return (
    <header>
        <img src = "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt = "Logo" className = "logo"/>

        <div className = "inputBox">
            <SearchRounded className = "searchIcon"  />
            <input type = "text" placeholder = "search" value = {searchText} onChange = {handleOnSearch} />
        </div>

        <div className = "shoppingCart">
            <ShoppingCartRounded classsName = "cart" /> 
            <div className = "cart_content">
                <p> {numberItemCart} </p>
            </div>
        </div>

        <div className = "profileContainer">
            <div className = "imgBox">
                <img src = "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt = "" />
            </div>
            <h2 className = "userName"> Vetrivel Ravi</h2>
        </div>

        <div className = "toggleMenu" >
            <BarChart className = "toggleIcon" />
        </div>



    </header>
  )
}

export default Header