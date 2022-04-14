import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { pushCartItem } from '../redux/action';
import { motion, animatePresent } from "framer-motion";


const ItemCard = ({imgSrc, name, ratings, price, itemId, data}) => {

    const [favorite, setFavorite] = useState(false);
    const [rating, setRating] = useState(ratings);

    const dispatch = useDispatch();
    
    const handleOnRating = (index) => {
        setRating(index + 1);
    }

    const handleAddToCheckOut = (dataPayload) => {
        dispatch(pushCartItem({...dataPayload, number: 1}));
    }
  return (
    <motion.div 
        layout 
        className="itemCard" id = {itemId}
        animate = {{opacity: 1, scale: 1}}
        initial = {{opacity: 0, scale: 1}}
        exit = {{opacity: 0, scale: 0}}
        transition = {{duration: .5 }}
    >
        <div className = {`isFavourite ${favorite ? "active" : ""}`} 
            onClick = {() => setFavorite(!favorite)}
        >
            <Favorite />
        </div>

        <div className = "imgBox">
            <img src={imgSrc} alt = "imgbox" className = "itemImg" />
        </div>
        <div className = "itemContent">
            <h3 className = "itemName">{name}</h3>
            <div className = "bottom">
                <div className = "rating">
                    {Array.apply(null, {length: 5}).map((element, index) => {
                            return (
                                <i key = {index} className = {index + 1 <= rating ? "orange" : "gray"} onClick = {() =>handleOnRating(index)}>
                                    <StarRounded />
                                </i>
                            )   
                    })}
                    <h3 className = "price">
                        <span>$ </span>
                        {price}
                    </h3>
                </div>
                <i className="addToCart" onClick = {() => handleAddToCheckOut(data)}>
                    <AddRounded />
                </i>
            </div>
        </div>
    </motion.div>
  )
}

export default ItemCard