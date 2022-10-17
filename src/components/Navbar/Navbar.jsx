
import { Search } from '@mui/icons-material'
import React from 'react'
import classes from "./Navbar.module.scss"
import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <span className={classes.lang}>EN</span>
          <div className={classes.searchContainer}>
            <input type="text" className={classes.input} />
            <Search style={({color:"gray", fontSize:16})}/>
          </div>
        </div>
        <div className={classes.center}>
          <h1 className={classes.title}>MONO STORE</h1>
        </div>
        <div className={classes.right}>
          <div className={classes.menu}>REGISTER</div>
          <div className={classes.menu}>SIGN IN</div>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Navbar