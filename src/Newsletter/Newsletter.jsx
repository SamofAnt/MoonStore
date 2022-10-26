import classes from "./Newsletter.module.scss"
import React from 'react'
import { Send } from "@mui/icons-material"

const Newsletter = () => {
  return (
        <div className={classes.container}>
            <h1 className={classes.title}>Newsletter</h1>
            <div className={classes.description}>Get timely updates from your favorite products.</div>
            <div className={classes.inputContainer}>
                <input type="text" className={classes.input} placeholder="Your email" />
                <button className={classes.btn}>
                    <Send className={classes.icon}/>
                </button>
            </div>
        </div>
  )
}

export default Newsletter