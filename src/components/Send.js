import React from "react";
import SendIcon from "@material-ui/icons/Send";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "../style/sendStyle.css";

const Send = (props) => {
  const { msg, setMsg, sendMsg } = props;
  return (
    <div id="sendContainer">
      <TextField
        placeholder="Enter your message"
        onChange={(e) => setMsg(e.target.value)}
        id="inputArea"
        value={msg}
      />
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        onClick={sendMsg}
        disabled={!msg}
      >
        <SendIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default Send;
