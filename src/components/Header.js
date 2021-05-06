import { Button, Menu, MenuItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import ChatIcon from "@material-ui/icons/Chat";
import React, { useState } from "react";
import "../style/headerStyle.css";

const Header = (props) => {
  const { handleLogout, setToggle, toggle, setListColor } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerColor, setHeaderColor] = useState("");
  const [appNameColor, setAppNameColor] = useState("");
  const [dark, setDark] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="headerContainer" style={{ backgroundColor: headerColor }}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: dark ? "white" : "black" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>
          <ExitToAppIcon /> &nbsp; Logout
        </MenuItem>
        <MenuItem onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <>
              <ChatIcon />
              &nbsp; Chat
            </>
          ) : (
            <>
              <PermIdentityIcon />
              &nbsp; Profile
            </>
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CloseIcon /> &nbsp; Close
        </MenuItem>
      </Menu>
      <header className="appName" style={{ color: appNameColor }}>
        openChat
      </header>
      <Button
        onClick={() => {
          if (headerColor === "black") {
            setHeaderColor("white");
            setAppNameColor("black");
            setListColor("white");
            setDark(false);
          } else if (headerColor === "white") {
            setHeaderColor("#f9f1f0");
            setAppNameColor("black");
            setListColor("#f8afa6");
            setDark(false);
          } else {
            setAppNameColor("white");
            setHeaderColor("black");
            setListColor("black");
            setDark(true);
          }
        }}
      >
        <FormatPaintIcon style={{ color: dark ? "white" : "black" }} />
      </Button>
    </div>
  );
};

export default Header;
