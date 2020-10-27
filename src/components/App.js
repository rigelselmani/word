import React, { useState } from 'react';
import Header from "./Header"
import Search from "./Search";
import Definition from "./Definition";
import Image from "./Image";
import Pronunce from "./Pronounce";

function App(){
  const [word,setWord]=useState();
    
  function handleWord(word){
     setWord(word)
  }
    return <div>
                <Header />
                <Search onAddPronounce={handleWord}/>
                <div className="App">
                  <Definition addWord={word}/>
                  <Image addWord={word}/>
                  <Pronunce addWord={word}/>
                </div>        
            </div>
}

export default App;