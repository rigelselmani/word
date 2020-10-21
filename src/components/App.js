import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition";
import Image from "./Image";
import Pronunce from "./Pronounce";

function App(){
  const [definition,setDefinition]=useState();
    const [image,setImage]=useState()
    const [pronouncde,setPronounce]=useState()
    
  function handleImage(wordImage){
     setImage(wordImage)
  }
  function handleDefinition(wordDefinition){
     setDefinition(wordDefinition)
  }

  function handlePronounce(wordPronounce){
     setPronounce(wordPronounce)
  }
    return <div>
                <Header />
                <Search onAddDefiniton={handleDefinition} onAddImage={handleImage} onAddPronounce={handlePronounce}/>
                <div className="App">
                  <Definition addDefinition={definition}/>
                  <Image addImage={image}/>
                  <Pronunce addPronounce={pronouncde}/>
                </div>        
            </div>
}

export default App;