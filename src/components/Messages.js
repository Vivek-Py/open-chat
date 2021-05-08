import React, { useEffect, useRef } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "../style/messagesStyle.css";

const Messages = (props) => {
  const { chats, user, listColor } = props;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  function msgItems(doc) {
    if (doc.uid === user.uid) {
      return (
        <div className="myMsgIdentifier msgIdentifier">
          <div className="blankArea"></div>
          <ListItem id="myMsg">
            {doc.msgBody}
            &nbsp; &nbsp;
            <div className="userProfile">
              <img id="userImage" src="https://picsum.photos/50/50" alt="U" />
            </div>
          </ListItem>
        </div>
      );
    } else {
      return (
        <div className="otherMsgIdentifier msgIdentifier">
          <ListItem id="otherMsg">
            <div className="userProfile">
              <img id="userImage" src="https://picsum.photos/49/49" alt="O" />
            </div>
            &nbsp; &nbsp;
            {doc.userName}: {doc.msgBody}
          </ListItem>
          <div className="blankArea"></div>
        </div>
      );
    }
  }

  return (
    <div className="msgList" style={{ backgroundColor: listColor }}>
      <List>{chats.map((doc) => msgItems(doc))}</List>
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default Messages;
