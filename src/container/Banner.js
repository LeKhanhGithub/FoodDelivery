import React from 'react'
import BannerName from '../Component/BannerName'

const Banner = () => {
  return (
    <div className = "banner">
            <BannerName name={"Jeremy"} discount={"20"} more={"#"} />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt=""
              className="deliveryPic"
            />
    </div>
  )
}

export default Banner