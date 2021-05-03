import { useEffect, useState } from "react";
import "./App.css";
import { db, fire } from "./firebase/Config";
import firebase from "firebase";
import LoggedIn from "./components/LoggedIn";
import LoggedOut from "./components/LoggedOut";

function App() {
  // useState Values
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState(null);
  const [user, setUser] = useState(null);

  // Acquire data from firestore databse
  useEffect(() => {
    db.collection("chats")
      .orderBy("timestamp", "desc")
      .limit("5")
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
  function handleLogin() {
    fire.auth().signInWithEmailAndPassword("test@email.com", "testPassword");
  }

  // Function to logout
  function handleLogout() {
    fire.auth().signOut();
  }

  // Function for sending messages
  function sendMsg() {
    let data = {
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
        <LoggedIn
          chats={chats}
          setChats={setChats}
          msg={msg}
          setMsg={setMsg}
          user={user}
          sendMsg={sendMsg}
          handleLogout={handleLogout}
        />
      ) : (
        <LoggedOut handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
