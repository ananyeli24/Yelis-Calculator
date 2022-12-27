
import './App.css';
import useState from "react";
function App() {
  // const [result, setResult] = useState('');
  // const [history, setHistory] = useState([]);

  // const handleClick = (e) => {
  //   setResult(result.concat(e.target.name));
  // }
  // const clear = () => {
  //   setResult("");
  // }
  // const signed = () => {
  //   let newResult = result * (-1);
  //   setResult(newResult);
  // }
  // const percentage = () => {
  //   let newResult = result / 100;
  //   setResult(newResult);
  // }
  // const equals = (e) => {
  //   try{
  //     setResult(eval(result).toString());
  //     setHistory([...history, `${result.concat(e.target.name)} = ${eval(result).toString()}`]);
  //   } catch(err){
  //     setResult('Error')
  //   }

  // }
  return (
    <div className="App">
      <h1 style={{margin: "0 auto", backgroundColor: "orange"}}>Yeli's Calculator</h1>
      <form></form>
    </div>
    
  );
}

export default App;
