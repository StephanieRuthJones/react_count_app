import { useEffect, useState } from "react";
import "./App.css";
import EffectFetch from "./examples/EffectFetch";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [effectMessage1, setEffectMessage1] = useState("");
  const [effectMessage2, setEffectMessage2] = useState("");
  const [effectMessage3, setEffectMessage3] = useState("");

  // ************* NO DEPENDENCIES ************* //
  useEffect(() => {
    setEffectMessage1(
      `Effect Hook, NO dependencies: You clicked ${count} times.`
    );
    console.log(
      `Effect Hook, NO dependencies- run after every rendering (when count or name states update).`
    );
  });

  // ************* EMPTY ARRAY DEPENDENCY ************* //
  // useEffect(() => {
  //   setEffectMessage2(
  //     `Effect Hook, [] EMPTY ARRAY DEPENDENCY: You clicked ${count} times`
  //   );
  //   console.log(
  //     `Effect Hook, [] EMPTY ARRAY DEPENDENCY - run only once when the component is mounted.`
  //   );
  // }, []);

  // ************* COUNT DEPENDENCY ************* //
  // useEffect(() => {
  //   console.log(
  //     `Effect Hook, [count] DEPENDENCY - runs only when count changes.`
  //   );
  //   setEffectMessage3(
  //     `Effect Hook, [count] DEPENDENCY: You clicked ${count} times.`
  //   );
  // }, [count]);

  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="App">
        <div>
          <h1>Count: {count}</h1>
          <p>{effectMessage1}</p>
          <p>{effectMessage2}</p>
          <p>{effectMessage3}</p>

          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div>
          <h1>Name: {name}</h1>
          <input
            id="name-input"
            type="text"
            placeholder="Name"
            onChange={updateName}
          />
        </div>
      </div>
      {/* <EffectFetch /> */}
    </>
  );
}

export default App;
