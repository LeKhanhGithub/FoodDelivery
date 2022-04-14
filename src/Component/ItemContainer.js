import React from 'react'
import { useSelector } from 'react-redux'
import { selectorListCartItems, selectorListItems } from '../redux/selector'
import ItemCard from './ItemCard'
import { AnimatePresence, motion } from "framer-motion";

const ItemContainer = () => {
    const listItems = useSelector(selectorListItems)
    const ListCartItems = useSelector(selectorListCartItems);

  return (
    <motion.div layout className = "dishItemContainer">
      <AnimatePresence>
        {listItems && 
            listItems.map(data => {
            return (
                <ItemCard
                key = {data.id}
                itemId = {data.id}
                imgSrc = {data.imgSrc}
                name = {data.name}
                ratings = {data.ratings}
                price = {data.price}
                data = {data}
                />
            )
            })
        }
      </AnimatePresence> 
    </motion.div>
  )
}

export default ItemContainer