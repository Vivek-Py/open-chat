import React from "react";
import Messages from "./Messages";
import Send from "./Send";
import "../style/messagesStyle.css";
import Header from "./Header";

const LoggedIn = (props) => {
  const {
    chats,
    setChats,
    msg,
    setMsg,
    user,
    sendMsg,
    handleLogout,
    setToggle,
    toggle,
  } = props;
  const [listColor, setListColor] = React.useState("");

  return (
    <>
      <div className>
        <Header
          handleLogout={handleLogout}
          setToggle={setToggle}
          toggle={toggle}
          setListColor={setListColor}
        />
        <Messages
          chats={chats}
          setChats={setChats}
          user={user}
          listColor={listColor}
        />
      </div>
      <Send msg={msg} setMsg={setMsg} user={user} sendMsg={sendMsg} />
    </>
  );
};

export default LoggedIn;
