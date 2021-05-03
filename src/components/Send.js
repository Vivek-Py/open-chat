import React from "react";

const Send = (props) => {
  const { msg, setMsg, sendMsg } = props;
  return (
    <div>
      <input
        placeholder="Enter your message"
        onChange={(e) => setMsg(e.target.value)}
        id="inputArea"
        value={msg}
      />
      <button type="submit" onClick={sendMsg}>
        Send
      </button>
    </div>
  );
};

export default Send;
