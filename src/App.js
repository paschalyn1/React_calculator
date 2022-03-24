import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState("");

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {}
  };

  const clear_all = () => {
    try {
      setVal(val.slice(-1, -1));
    } catch (error) {}
  };

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("NaN");
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder={0}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="row1">
          <button value="1" onClick={(e) => setVal(val + e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => setVal(val + e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setVal(val + e.target.value)}>
            3
          </button>
          <button value="4" onClick={(e) => setVal(val + e.target.value)}>
            4
          </button>
          <button value="C" onClick={() => backspace()}>
            C/CE
          </button>
        </div>

        <div className="row2">
          <button value="5" onClick={(e) => setVal(val + e.target.value)}>
            5
          </button>
          <button value="6" onClick={(e) => setVal(val + e.target.value)}>
            6
          </button>
          <button value="7" onClick={(e) => setVal(val + e.target.value)}>
            7
          </button>
          <button value="8" onClick={(e) => setVal(val + e.target.value)}>
            8
          </button>
          <button value="+" onClick={(e) => setVal(val + e.target.value)}>
            +
          </button>
        </div>

        <div className="row3">
          <button value="9" onClick={(e) => setVal(val + e.target.value)}>
            9
          </button>
          <button value="0" onClick={(e) => setVal(val + e.target.value)}>
            0
          </button>
          <button value="*" onClick={(e) => setVal(val + e.target.value)}>
            X
          </button>
          <button value="-" onClick={(e) => setVal(val + e.target.value)}>
            -
          </button>
          <button value="." onClick={(e) => setVal(val + e.target.value)}>
            .
          </button>
        </div>

        <div className="row4">
          <button value="/" onClick={(e) => setVal(val + e.target.value)}>
            /
          </button>
          <button value="=" onClick={() => calculate()}>
            =
          </button>
          <button value="Clear all" onClick={(e) => clear_all()}>
            clear all
          </button>
        </div>
      </div>
    </div>
  );
}
