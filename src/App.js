import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [effectMessage1, setEffectMessage1] = useState("");
  const [effectMessage2, setEffectMessage2] = useState("");
  const [effectMessage3, setEffectMessage3] = useState("");
  // ************* USEEFFECT HOOK ************* //
  //The useEffect Hook is a React hook that is used to specify the side effects that occur after a component renders.
  //They can be used to perform a variety of operations, such as fetching data, setting up a subscription, or changing the DOM.
  //What are side effects?
  //=> Side effects are any changes to the state of the application outside of the scope of the function that returns the JSX to be rendered.
  //The Effect Hook replaces lifecycle methods (e.g., componentDidMount, componentDidUpdate, and componentWillUnmount
  //=> It llows you to execute lifecycle tasks without a need for a class component
  //=> You can fetch data in React using the useEffect hook.

  // ************* SYNTAX OF USEEFFECT HOOK ************* //
  // useEffect(callback, [dependencies]);
  //The first argument is a function that contains the side-effect logic
  //The second argument is an array of dependencies
  //The useEffect hook will only run the callback function if the dependencies have changed between renderings
  //If the dependencies are not provided, the callback will run after every rendering
  //In the first useEffect pictured, there is no dependency provided, so the side-effect runs after every rendering.
  //Let's take a closer look at how it works

  // ************* NO DEPENDENCIES ************* //
  //no dependency provided, so the side-effect runs after every rendering.
  //This is the same as componentDidMount and componentDidUpdate
  //it will run when the component is mounted and when count or name changes in state
  //whenever state changes, a re-rendering occurs
  useEffect(() => {
    setEffectMessage1(
      `Effect Hook, NO dependencies: You clicked ${count} times.`
    );
    console.log(
      `Effect Hook, NO dependencies- run after every rendering (when count or name states update).`
    );
  });

  // ************* EMPTY ARRAY DEPENDENCY ************* //

  // empty array dependency, so the side-effect runs only once after the first rendering.
  //This is the same as componentDidMount
  //it will run when the component is mounted
  //It will only run once, when the component is mounted
  //If you want to fetch data from an API, this is the best place to do it because it will only run once
  //It will not run when the component is updated (won't run when count or name state changes)

  useEffect(() => {
    setEffectMessage2(
      `Effect Hook, [] EMPTY ARRAY DEPENDENCY: You clicked ${count} times`
    );
    console.log(
      `Effect Hook, [] EMPTY ARRAY DEPENDENCY - run only once when the component is mounted.`
    );
  }, []);
  // ************* COUNT DEPENDENCY ************* //
  // count dependency provided, so the side-effect runs only when the dependency changes.
  //This is the same as componentDidUpdate
  //it will run when the component is mounted and when count changes in state
  //it will not run when name changes in state
  useEffect(() => {
    console.log(
      `Effect Hook, [count] DEPENDENCY - runs only when count changes.`
    );
    setEffectMessage3(
      `Effect Hook, [count] DEPENDENCY: You clicked ${count} times.`
    );
  }, [count]);

  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
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
  );
}

export default App;
