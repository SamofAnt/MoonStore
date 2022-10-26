import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import classes from "./Product.module.scss"


const Product = ({item}) => {
  return (
    <div className={classes.container}>
        <div className={classes.circle}></div>
        <img src={item.img} alt="" className={classes.image} />
        <div className={classes.info}>
            <div className={classes.icon}>
                <ShoppingCartOutlined/>
            </div>
            <div className={classes.icon}>
                <SearchOutlined/>
            </div>
            <div className={classes.icon}>
                <FavoriteBorderOutlined/>
            </div>
        </div>
    </div>
  )
}

export default Product