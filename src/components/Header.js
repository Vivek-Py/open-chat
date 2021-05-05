import { Button, Menu, MenuItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import React, { useState } from "react";
import "../style/headerStyle.css";

const Header = (props) => {
  const { handleLogout } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [headerColor, setHeaderColor] = useState("");
  const [appNameColor, setAppNameColor] = useState("");

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
        <MenuIcon />
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
        <MenuItem onClick={handleClose}>
          <PermIdentityIcon /> &nbsp; Profile
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
          if (headerColor === "yellow") {
            setHeaderColor("white");
            setAppNameColor("black");
          } else if (headerColor === "white") {
            setHeaderColor("coral");
            setAppNameColor("white");
          } else {
            setAppNameColor("black");
            setHeaderColor("yellow");
          }
        }}
      >
        <FormatPaintIcon />
      </Button>
    </div>
  );
};

export default Header;
