import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { pushCartItem, removeCartItems } from '../redux/action';


const CartItem = ({name, imgSrc, number, price, item}) => {

    const dispatch = useDispatch();

    const handleRemoveCart = () => {
        dispatch(removeCartItems(item))
    }

    const handleAddCart = () => {
        dispatch(pushCartItem(item));
    }

  return (
    <div className="cartItem">
        <div className="imgBox">
            <img src = {imgSrc} alt="" />
        </div>

        <div className="itemSection">
            <h2 className="itemName"> {name} </h2>
            <div className="itemQuantity">
                <span>x {number} </span>
                <div className="quantity">
                    <RemoveRounded className="itemRemoved" onClick = {handleRemoveCart}/>

                    <AddRounded className="itemAdd" onClick = {handleAddCart} />
                </div>
            </div>
        </div>

        <p className="itemPrice">
            <span className="dolorSign">$ </span>
            <span className="itemPriceValue">{price}</span>
        </p>
    </div>
  )
}

export default CartItem