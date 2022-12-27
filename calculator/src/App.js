
// import { GlobalStyles } from './Global';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([])
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const signed = () => {
    let newResult = result * (-1);
    setResult(newResult);
  }
  const percentage = () => {
    let newResult = result / 100;
    setResult(newResult);
  }
  const equals = (e) => {
    try {
      setResult(eval(result).toString());
      //...history ref the arr to add data
      //stores operations into history so we map in html to render those vals
      setHistory([...history, `${result.concat(e.target.name)} = ${eval(result).toString()}`]);
    } catch (err) {
      setResult("Error");
    }
  }
  return (
    <div className="App">
      <h1 style={{ margin: " 0 auto", padding: "20px", fontSize: '25px', backgroundColor: "orange" }} data-test="awesome-title">Anas Calculator</h1>
      <form>        <input type="text" value={result} data-cy="result" />      </form>
      <div className="Keypad">
        <button onClick={clear} id="clear" data-cy="buttonClear">AC</button>
        <button onClick={signed} id="signed" data-cy="buttonSigned">+/-</button>
        <button onClick={percentage} id="percentage" data-cy="buttonPercentage">%</button>
        <button name="/" onClick={handleClick} id="functions" data-cy="buttonDivide">&divide;</button>
        <button name="7" onClick={handleClick} id="numbers">7</button>
        <button name="8" onClick={handleClick} id="numbers" data-cy="button8">8</button>
        <button name="9" onClick={handleClick} id="numbers">9</button>
        <button name="*" onClick={handleClick} id="functions" data-cy="buttonMultiply">&times;</button>
        <button name="4" onClick={handleClick} id="numbers" data-cy="button4">4</button>
        <button name="5" onClick={handleClick} id="numbers" data-cy="button5">5</button>
        <button name="6" onClick={handleClick} id="numbers">6</button>
        <button name="-" onClick={handleClick} id="functions" data-cy="buttonSubtract">&ndash;</button>
        <button name="1" onClick={handleClick} id="numbers" data-cy="button1">1</button>
        <button name="2" onClick={handleClick} id="numbers" data-cy="button2">2</button>
        <button name="3" onClick={handleClick} id="numbers" data-cy="button3">3</button>
        <button name="+" onClick={handleClick} id="functions" data-cy="buttonSum">+</button>
        <button name="0" onClick={handleClick} id="zero" data-cy="buttonZero">0</button>
        <button name="." onClick={handleClick} id="numbers" data-cy="buttonDecimal">.</button>
        <button onClick={equals} id="equals" data-cy="buttonEquals">=</button>
      </div>
      
     {/* history */}
      <div>
        <div style={{ padding: "15px", paddingTop: '10px', marginTop: '15px', fontSize: '20px', backgroundColor: "white" }}>
          <p> Operation's History </p>
          <div style={{ backgroundColor: "orange", fontSize: '20px' }} >
            {
              history.map(index => {
                return (
                  <p>{index}</p>)
              })
            }
          </div>
        </div>
        
        </div>
      </div>


  )}
export default App;

