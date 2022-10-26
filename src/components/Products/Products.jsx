import React from 'react'
import classes from "./Products.module.scss"
import { popularProducts } from '../../data'
import Product from './Product/Product'
const Products = () => {
  return (
    <div className={classes.container}>
        { popularProducts.map((item)=> (
            <Product item={item}  key={item.id}/>
        ))}
    </div>
  )
}

export default Products