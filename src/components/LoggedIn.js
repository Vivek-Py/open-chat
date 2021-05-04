import React from "react";
import Messages from "./Messages";
import Send from "./Send";
import "../style/messagesStyle.css";
import Header from "./Header";

const LoggedIn = (props) => {
  const { chats, setChats, msg, setMsg, user, sendMsg, handleLogout } = props;
  return (
    <>
      <div className>
        <Header handleLogout={handleLogout} />
        <Messages chats={chats} setChats={setChats} user={user} />
      </div>
      <Send msg={msg} setMsg={setMsg} user={user} sendMsg={sendMsg} />
    </>
  );
};

export default LoggedIn;
