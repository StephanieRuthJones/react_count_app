import React, { useState, useEffect } from "react";
function EffectFetch() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/StephanieRuthJones"
      );
      const data = await response.json();
      setUserData(data);
    };
    let isApiSubscribed = true;
    if (isApiSubscribed) {
      fetchData();
    }
    // Cleanup function to prevent memory leaks
    // the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts.
    //The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens.
    //The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.
    //A memorty leak is when a component is unmounted but the useEffect Hook is still running in the background.
    //The cleanup function is called before the component is unmounted and before the useEffect Hook is run again.
    //In this example, the cleanup function avoids the error, "Can't perform a React state update on an unmounted component."
    return () => {
      // unsubscribe from the API
      isApiSubscribed = false;
    };
  }, []);
  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.location}</p>
      <img src={userData.avatar_url} alt={userData.name} />
    </div>
  );
}

export default EffectFetch;
