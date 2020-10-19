import React,{useState} from 'react';
import Header from "./Header"
import Definition from "./Definition"
import Search from "./Search"

function App() {

  const [text,setText]=useState();
    
  function handleWord(words){
     setText(words)
  }

  return <div>
             <Header />  
             <Search onAdd={handleWord}/>
             <div className="container">
               <Definition addText={text}/>
             </div>
         </div>
}

export default App;
