import React from 'react'
import MenuCard from './MenuCard';
import { useDispatch } from 'react-redux';
import { filterItemDish } from '../redux/action';
import { ChevronRightRounded } from '@mui/icons-material';

const MenuItem = ({MenuItems}) => {

    const dispatch = useDispatch();

    const handleClickMenu = (itemID) => {
        dispatch(filterItemDish(itemID));
    }

  return (
    <div className = "rowContainer rowContainer2">
        <div className= "rowMenuCard  active allFood" onClick = {() => handleClickMenu("All")}>
            <div className="imgBox">
                <img src= "https://testmaxprep.s3.amazonaws.com/images/web/blog/blog_image/blog_full_sometimes-its-about-quantity-and-not-quality-all-statements.png" alt="" />
            </div>
            <h3>ALL FOOD</h3>
            <i className="loadMenu">
                <ChevronRightRounded />
            </i>
        </div>
        <div className="rowContainer">
        {
            MenuItems && MenuItems.map(data =>{
            return(
                <div key = {data.id} onClick = {() => handleClickMenu(data.itemId)}>
                <MenuCard 
                imgSrc = {data.imgSrc} 
                name = {data.name} 
                isActive = {data.id === 1 ? true : false} 
                
                />
            </div>
            );
            })
        }
        </div>
        
    </div>
  )
}

export default MenuItem