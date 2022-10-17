import React from 'react'
import classes from './Slider.module.scss'
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import styled from "styled-components"

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;        
`;

const ImgContainer = styled.div`
    height: 100%;
    flex:1;
`;
const Image = styled.img`
    height:80%;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`

const Slider = () => {
    return (
        <div className={classes.container}>
            <Arrow direction="left">
                <ArrowBackIos />
            </Arrow>
            <div className={classes.wrapper}>
                <Slide>

                
               <ImgContainer>
                <Image src="https://i.ibb.co/DG69bQ4/2.png"/>
               </ImgContainer> 
               </Slide>
               <InfoContainer></InfoContainer>
            </div>
            <Arrow direction="right">
                <ArrowForwardIos />
            </Arrow>
        </div >
    )
}

export default Slider