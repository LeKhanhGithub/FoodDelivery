import React from 'react'
import MenuItem from '../Component/MenuItem';
import SubMenuContainer from '../Component/SubMenuContainer';
import ItemContainer from '../Component/ItemContainer';

const DisContainer = ({MenuItems, mainData}) => {
  return (
    <div className = "dishContainer">
        <div className = "menuCard">
            <SubMenuContainer name = {"Menu Category"}/>
        </div>
        <MenuItem MenuItems = {MenuItems}/>
        <ItemContainer mainData = {mainData}/>
  </div>
  )
}

export default DisContainer