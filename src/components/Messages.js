import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "../style/messagesStyle.css";

const Messages = (props) => {
  const { chats, user } = props;
  function msgItems(doc) {
    if (doc.uid === user.uid) {
      return <ListItem id="myMsg">{doc.msgBody}</ListItem>;
    } else {
      return <ListItem id="otherMsg">{doc.msgBody}</ListItem>;
    }
  }

  return (
    <div>
      <List>{chats.map((doc) => msgItems(doc))}</List>
    </div>
  );
};

export default Messages;
