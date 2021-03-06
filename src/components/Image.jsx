import React, { useState,useEffect } from "react";

function ImageDisplay(props){
  
    const [newImage,setNewImage]=useState();

    useEffect(() =>{
    if(props.addWord===undefined){
    }else{
    fetch(`https://pixabay.com/api/?key=11051593-a4e6d6adfc2d65d6b9612b399&q&q=${props.addWord}&`)
    .then(response=> response.json())
    .then(jsonResponse =>{
      if(jsonResponse.hits[0]===undefined){
       setNewImage("https://netflixroulette.files.wordpress.com/2013/01/image-not-found.gif")
      }else{
       setNewImage(jsonResponse.hits[0].largeImageURL)
      }
    })
  }
})
    return <div className="definition">
              <h2 className="displayHead">Image • word</h2>
              <div className="img">
               <img className="image-display" src={newImage ===undefined?"https://m.gjcdn.net/game-thumbnail/500/124708-crop0_10_698_402-hcrxbnkk-v4.jpg":newImage } alt="display-img"/>
              </div>
            </div>
}

export default ImageDisplay;