import React from 'react'
import CartItem from '../Component/CartItem'
import DebitCard from '../Component/DebitCard'
import SubMenuContainer from '../Component/SubMenuContainer'
import { useSelector } from 'react-redux';
import { selectorListCartItems } from '../redux/selector';

const RightMenu = () => {

    const ListCartItems = useSelector(selectorListCartItems);

    var totalPrice = 0;
    ListCartItems.forEach((item) => {
      totalPrice += item.number * item.price
    });

  return (
    <div className = "rightMenu">
          <div className = "debitCardContainer">
            <div className = "debitCard">
              <DebitCard />
            </div>
          </div>
          <div className = "cartCheckOutContainer">
            <SubMenuContainer name = {"Cart Items"}/>
            <div className = "cartContainer">
              <div className = "cartItems">
                  {
                      ListCartItems.map((item) =>{
                          return (
                            <CartItem
                                key = {item.id}
                                name = {item.name}
                                imgSrc = {item.imgSrc}
                                number = {item.number}
                                price = {item.price}
                                item = {item}
                            />
                          )
                      })
                  }
                
               
              </div>
            </div>
            <div class="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span>{totalPrice}
              </p>
            </div>
            <button className = "checkOut">Check Out</button>
          </div>
        </div>
  )
}

export default RightMenu