import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import "../Style/slider.css"
import { sliderItems } from "../Data"
import { styled } from "styled-components"
import { useState } from "react"

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
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
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideindex * -100}vw);
    transition: all 1s ease;
`
const Slider = () => {
    const [slideIndex , setSlideIndex] = useState(0)
    const handelClick = (direction) =>{
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
        }else{
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
        }
    }
    return (
        <div className="slider-container">
            <Arrow direction="left" onClick={()=> handelClick("left")} className="slider-arrow">
                <ArrowLeft/>
            </Arrow>
            <Wrapper slideindex={slideIndex}>
                {sliderItems.map((item)=>{
                    return(
                    <div className="slide">
                        <div className="image-container">
                            <img src={item.img} alt="man-img" />
                        </div>
                        <div className="info-container">
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                            <button>SHOW NOW</button>
                        </div>
                    </div>  
                    )                  
                })}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handelClick("right")} className="slider-arrow">
                <ArrowRight />
            </Arrow>
        </div>
    )
}

export default Slider