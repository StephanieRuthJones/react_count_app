import React, { useState, useEffect } from "react";
function EffectFetch() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {}, []);
  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <h1>{userData.name}</h1>
      <p>{userData.location}</p>
      <img src={userData.avatar_url} alt={userData.name} /> */}
    </div>
  );
}
export default EffectFetch;
