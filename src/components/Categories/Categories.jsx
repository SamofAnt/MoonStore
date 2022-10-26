import React from 'react'
import CategoryItem from './Category/CategoryItem'
import classes from "./Categories.module.scss"
import { categories } from '../../data'

const Categories = () => {
  return (
        <div className={classes.container}>
             {categories.map(item=>(
          <CategoryItem item={item} key={item.id}/>
        ))}
        </div>
  )
}

export default Categories