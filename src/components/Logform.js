import React, { useState } from "react";
import SignIn from "./Signin";
import SignUp from "./Singup";

const Logform = (props) => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    clearErrors,
    setUser,
    handleSignup,
    username,
    setUsername,
    userError,
    setUserError,
  } = props;
  const [check, setCheck] = useState(true);
  return (
    <>
      {check ? (
        <SignIn
          setEmail={setEmail}
          handleLogin={handleLogin}
          setPassword={setPassword}
          clearErrors={clearErrors}
          passwordError={passwordError}
          emailError={emailError}
          setUser={setUser}
          setCheck={setCheck}
          check={check}
          username={username}
          setUsername={setUsername}
          userError={userError}
          setUserError={setUserError}
        />
      ) : (
        <SignUp
          setCheck={setCheck}
          check={check}
          setEmail={setEmail}
          handleLogin={handleLogin}
          setPassword={setPassword}
          handleSignup={handleSignup}
          username={username}
          setUsername={setUsername}
          userError={userError}
          setUserError={setUserError}
        />
      )}
    </>
  );
};

export default Logform;
