import React from "react";
import Logform from "./Logform";

const LoggedOut = (props) => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    clearErrors,
    setUser,
    handleSignup,
    user,
    email,
    setEmailError,
    password,
    username,
    setUsername,
    userError,
    setUserError,
  } = props;
  return (
    <>
      <Logform
        handleLogin={handleLogin}
        setEmail={setEmail}
        setPassword={setPassword}
        clearErrors={clearErrors}
        user={user}
        setUser={setUser}
        email={email}
        setEmailError={setEmailError}
        password={password}
        passwordError={passwordError}
        emailError={emailError}
        handleSignup={handleSignup}
        username={username}
        setUsername={setUsername}
        userError={userError}
        setUserError={setUserError}
      />
    </>
  );
};

export default LoggedOut;
