import React, {useState} from "react";
import axios from "axios";
import "./Quotes.css";
function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
function getQuote() {
    axios.get("http://localhost:2000/",  { crossdomain: true }).then(response => {
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }
return (
  <div className="button-container">
   
      <button className="generate-button" onClick={getQuote}>
        Generate Quote
      </button>
      <h1 className="quote-text">{text}</h1>
      <h3  className="quote-author">{"-" + author}</h3>
  
    </div>

  )
}
export default Quotes;