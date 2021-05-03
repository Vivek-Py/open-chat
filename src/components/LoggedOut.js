import React from "react";

const LoggedOut = (props) => {
  const { handleLogin } = props;
  return (
    <>
      <button onClick={handleLogin}>Login with test data</button>
    </>
  );
};

export default LoggedOut;
