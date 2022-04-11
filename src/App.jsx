import { useState } from "react";
import "./App.css"
function App() {
  const [flag, setflag] = useState(false);
  const [score, setScore] = useState(76);
  const [wicket, setwicket] = useState(2);
  const [over, setover] = useState(8.2);
  const [result, setresult] = useState();

  // score handler funciton
  const handleAddScore = (value) => {
    if (flag) {
      return;
    }
    let temp = score + value;
    if (temp > 100) {
      setflag(true);
      setresult("India won");
    }
    setScore(temp);
  };

  // wicket handler funciton
  const handleWicketCount = (value) => {
    if (flag) {
      return;
    }

    if (wicket >= 12) {
      setresult("India defeated");
      setflag(true);
    }
    setwicket(wicket + value);
  };

  // over handler funciton
  const handleOverScore = (value) => {
    if (flag) {
      return;
    }
    let t = over.toString();
    if (t[t.length - 1] === "5") {
      value = 0.5;
    }
    t = +over;
    let r = t + value;

    setover(r.toFixed(1));
  };
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score: <h1 className="scoreCount">{score}</h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              over
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            handleAddScore(1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            handleAddScore(4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            handleAddScore(6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            handleWicketCount(1);
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          className="overcount"
          onClick={() => {
            handleOverScore(0.1);
          }}
        >
          Add 1
        </button>
      </div>
      <h1>{result}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
