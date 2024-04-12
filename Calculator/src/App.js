import "./App.css";
import { useState } from "react";
function App() {

  const [input, setinput] = useState("");

  const handleclick = (value) => {
    if(value === "C"){
      setinput("");
    }
    else if(value === "<"){
      setinput(input.slice(0,-1));
    }
    else if(value === "="){
      try{
        setinput(eval(input).toString())
      }
      catch(error){
        setinput("Error");
      }
    }
    else{
      setinput((prevInput) => prevInput+ value);
    }
    }
  return (
    <div className="container">
      <div className="calc">
        <h1 id="input">{input}</h1>
        <div>
          <button onClick={() => {
            handleclick('C')
          }}>C</button>
          <button  onClick={() => {
            handleclick('<')
          }}>&lt;</button>
          <button  onClick={() => {
            handleclick('%')
          }}>%</button>
          <button  onClick={() => {
            handleclick('/')
          }}>/</button>
        </div>
        <div>
          <button  onClick={() => {
            handleclick('7')
          }}>7</button>
          <button onClick={() => {
            handleclick('8')
          }}>8</button>
          <button  onClick={() => {
            handleclick('9')
          }}>9</button>
          <button   onClick={() => {
            handleclick('*')
          }}>*</button>
        </div>
        <div>
          <button  onClick={() => {
            handleclick('4')
          }}>4</button>
          <button  onClick={() => {
            handleclick('5')
          }}>5</button>
          <button  onClick={() => {
            handleclick('6')
          }}>6</button>
          <button  onClick={() => {
            handleclick('-')
          }}>-</button>
        </div>
        <div>
          <button  onClick={() => {
            handleclick('1')
          }}>1</button>
          <button  onClick={() => {
            handleclick('2')
          }}>2</button>
          <button  onClick={() => {
            handleclick('3')
          }}>3</button>
          <button  onClick={() => {
            handleclick('+')
          }}>+</button>
        </div>
        <div>
          <button  onClick={() => {
            handleclick('0')
          }}>0</button>
          <button  onClick={() => {
            handleclick('.')
          }}>.</button>
          <button  onClick={() => {
            handleclick('00')
          }}>00</button>
          <button  onClick={() => {
            handleclick('=')
          }}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
