import React from "react";
import "./ImgDisplay.css";



export default function imgDisplay({originalImg,processedImg}){
    return(
        

        <div className="img-display">
        <div className="original-img">
        <h2>original img</h2>
        {originalImg && <img src={originalImg} alt="original"/>}

        </div>
        <div className="processed-img">
        <h2>processed img</h2>
        {processedImg && <img src={processedImg}alt="processed"/>}
        </div>
        </div>
        
    )
}