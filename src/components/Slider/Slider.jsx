import React, { useState } from 'react'
import classes from './Slider.module.scss'
import { ArrowBackIos } from '@mui/icons-material';
import { ArrowForwardIos } from '@mui/icons-material';
import styled from "styled-components"
import { sliderItems } from '../../data';
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
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    height: 100%;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items:center;   
    background-color: #${props => props.bg}     
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
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className={classes.container}>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>

                        <InfoContainer>
                            <h1 className={classes.title}>{item.title}</h1>
                            <p className={classes.desc}>{item.desc}</p>
                            <button className={classes.btn}>SHOW NOW</button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIos />
            </Arrow>
        </div >
    )
}


export default Slider