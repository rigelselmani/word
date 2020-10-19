import React,{useState} from "react";

function Search(props){
    const [word,setWord]=useState();
    
    function handleChange(event){
        const newValue=event.target.value;
        setWord(newValue)
    }

    function handleClick(event){
        props.onAdd(word);
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