import React from "react";

const Messages = (props) => {
  const { chats } = props;

  return (
    <div>
      <ul>
        {chats.map((doc) => (
          <li>{doc.msgBody}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
