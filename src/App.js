
import { useEffect, useState } from "react";

import './App.css';
import Header from './Component/Header';
import {MenuItems, Items} from "./Component/Data";
import Banner from "./container/Banner";
import DisContainer from "./container/DisContainer";
import RightMenu from "./container/RightMenu";
import BottomMenu from "./Component/BottomMenu";

function App() {
  //Main Dish State
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
    )

  useEffect(() => {
    console.log(isMainData);
    const menuLi = document.querySelectorAll("#menu li");
    

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove("active")); //khi item li nao do bi click thi loai bo het class active o cac the li khac
      this.classList.add("active"); // them class active vao the li duoc click, this o day la the duoc click
      console.log(menuLi);
    }

    //Menucard active toggle
    const menuCards = document.querySelectorAll(".rowMenuCard");
     menuCards.forEach((n) => n.addEventListener("click",setMenuCardActive))

     function setMenuCardActive(){
      menuCards.forEach((n) => n.classList.remove("active")); 
      this.classList.add("active"); 
     } 
  }, [])

  
  return (
    <div className="App">
      <Header />
      <main>
        <div className = "mainContainer">
          <Banner />
          <DisContainer 
            MenuItems = {MenuItems} 
            isMainData={isMainData} 
            mainData = {isMainData}
          /> 
        </div>
        <RightMenu />
      </main>

    <BottomMenu />
      
  </div>
  );
}

export default App;
