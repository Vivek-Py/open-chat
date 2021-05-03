import { useEffect, useState } from "react";
import "./App.css";
import Messages from "./components/Messages";
import Send from "./components/Send";
import { db } from "./firebase/Config";
import firebase from "firebase";

function App() {
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    db.collection("chats")
      .orderBy("timestamp", "desc")
      .limit("10")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => documents.push({ ...doc.data(), id: doc.id }));
        setChats(documents.reverse());
      });
  }, []);
  function sendMsg() {
    let data = {
      msgBody: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("chats").add(data);
    setMsg("");
  }
  return (
    <div className="App">
      <Messages chats={chats} setChats={setChats} />
      <Send msg={msg} setMsg={setMsg} sendMsg={sendMsg} />
    </div>
  );
}

export default App;
