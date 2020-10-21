import React,{useState} from "react";

function Search(props){
    const [word,setWord]=useState();
    
    function handleChange(event){
        const newValue=event.target.value;
        setWord(newValue)
    }

    function handleClick(event){
        props.onAddDefiniton("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
            props.onAddImage("https://pixabay.com/api/?key=11051593-a4e6d6adfc2d65d6b9612b399&q&q="+word+"&")
            props.onAddPronounce("https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=1f40dde8-50d6-4eb6-9168-6f465c469eb9")
        setWord("");
        event.preventDefault()
    }
    return <form>
              <h3>Search a &#8226; word</h3>
              <input onChange={handleChange} value={word} type="text"  name="word"/>
              <button className="submit-button" value={word} onClick={handleClick}>Search</button>
           </form>
}

export default Search;