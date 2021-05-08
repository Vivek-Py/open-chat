import { useEffect, useState } from "react";
import "./App.css";
import { db, fire } from "./firebase/Config";
import firebase from "firebase";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";
import Profile from "./components/Profile";

function App() {
  // useState Values
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState(null);
  const [toggle, setToggle] = useState(false);

  // useState values for authentication
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // Acquire data from firestore databse
  useEffect(() => {
    db.collection("chats")
      .orderBy("timestamp", "desc")
      .limit("15")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setChats(documents.reverse());
      });
  }, []);

  // Running authentication listener
  useEffect(() => {
    authListener();
  });

  // Required Functions

  // Function to check if user logged in or not
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  // Function to login
  const handleLogin = () => {
    if (userError) {
      // Do nothing
      window.alert("Please Enter Username.");
    } else {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            default:
          }
        });
    }
  };
  // Function to logout
  function handleLogout() {
    fire.auth().signOut();
    setEmail("");
    setPassword("");
  }

  // Function to signup
  const handleSignup = () => {
    if (userError) {
      // Do Nothing
      window.alert("Please Enter Username.");
    } else {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
          }
        });
    }
  };

  // Function for sending messages
  function sendMsg() {
    let data = {
      userName: username,
      msgBody: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
    };
    db.collection("chats").add(data);
    setMsg("");
  }

  // Return the components
  return (
    <div className="App">
      {user ? (
        <>
          {toggle ? (
            <Profile user={user} setToggle={setToggle} toggle={toggle} />
          ) : (
            <LoggedIn
              chats={chats}
              setChats={setChats}
              msg={msg}
              setMsg={setMsg}
              user={user}
              sendMsg={sendMsg}
              handleLogout={handleLogout}
              setToggle={setToggle}
              toggle={toggle}
            />
          )}
        </>
      ) : (
        <LoggedOut
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
          setUserError={setUserError}
          userError={userError}
        />
      )}
    </div>
  );
}

export default App;
