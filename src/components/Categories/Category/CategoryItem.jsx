import React from 'react'
import classes from "./CategoryItem.module.scss"

const CategoryItem = ({ item }) => {
  return (
    <div className={classes.container}>
      <img src={item.img} alt="" className={classes.image}/>
      <div className={classes.info}>
        <h1 className={classes.title}>{item.title}</h1>
        <button className={classes.button}>SHOW NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem