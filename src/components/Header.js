import { Button, Menu, MenuItem } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import React from "react";

const Header = (props) => {
  const { handleLogout } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
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
    </>
  );
};

export default Header;
