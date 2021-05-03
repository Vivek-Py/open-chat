import React from "react";
import Messages from "./Messages";
import Send from "./Send";

const LoggedIn = (props) => {
  const { chats, setChats, msg, setMsg, user, sendMsg, handleLogout } = props;
  return (
    <>
      <button onClick={handleLogout}>Logout ?</button>
      <Messages chats={chats} setChats={setChats} user={user} />
      <Send msg={msg} setMsg={setMsg} user={user} sendMsg={sendMsg} />
    </>
  );
};

export default LoggedIn;
