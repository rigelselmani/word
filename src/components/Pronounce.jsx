import React, { useState } from "react";

function Pronunce(props){

  const [writenP,setWritenP]=useState()
  const [pronounce,setPronounce]=useState()
  
  fetch(props.addPronounce)
  .then(response=> response.json())
  .then(jsonResponse =>{
  
  if(jsonResponse==={}||jsonResponse[0]===undefined||jsonResponse[0].hwi===undefined||jsonResponse[0].hwi.prs[0].sound===undefined){
   const writtenPron=""
     // Logic for subdirectory in order to create url

    // var sou = "https://media.merriam-webster.com/soundc11/r/retry01ld.wav";
    setWritenP(writtenPron)
    setPronounce("")
  }else{
    var writtenPron= jsonResponse[0].hwi.prs[0].mw;
    var file = jsonResponse[0].hwi.prs[0].sound.audio;
   
    var uniChar = file.slice(0,1);
    var biChar = file.slice(0,2);
    var triChar = file.slice(0,3);
    var subDir = "";
 
    if (triChar === "bix") {
        subDir = "bix";
    } else if (biChar === "gg") {
        subDir = "gg";
    } else if (alphabetic(uniChar) === true) {
        subDir = uniChar;
    } else {
        subDir = "number";
    }
 
     function alphabetic(inputtxt) {
       var letters = /^[a-zA-Z]+$/;
       if ((inputtxt.match(letters))) {
           return true;
       } else {
           return false; 
       }
     }
    var url = "https://media.merriam-webster.com/soundc11/" + subDir + "/" + file + ".wav";
    setWritenP(writtenPron)
    setPronounce(url)
  }
  })

    return <div className="definition">
             <h2 className="displayHead">Sound • word</h2>
             <div className="pronounce">
                <p>{writenP}</p>
                <p>noun</p>
                <audio className="playbutton" id="embed_player" src={pronounce} autostart="false" controls="true"></audio>
             </div>
           </div>
}

export default Pronunce;