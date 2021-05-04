import React from "react";

const LoggedOut = (props) => {
  const { handleLogin, handleLogin2 } = props;
  return (
    <>
      <button onClick={handleLogin}>Login with test data</button>
      <button onClick={handleLogin2}>Login with test data</button>
    </>
  );
};

export default LoggedOut;
