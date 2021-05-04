import React from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "../style/uploadStyle.css";

const Upload = () => {
  return (
    <>
      <label>
        <input className="fileAttach" type="file" />
        <AttachFileIcon className="fileAttachIcon" fontSize="small" />
      </label>
    </>
  );
};

export default Upload;
