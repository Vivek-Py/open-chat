import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import "../style/profileStyle.css";
import Header from "./Header";

const Profile = (props) => {
  const { user, setToggle, toggle } = props;

  return (
    <>
      <Header setToggle={setToggle} toggle={toggle} />
      <Card className="profileContainer">
        <CardMedia>
          <img
            className="profileImage"
            src="https://picsum.photos/150/150"
            alt=""
            srcset=""
          />
        </CardMedia>
        <hr />
        <CardContent className="profileDetail">
          <div className="profileItems">Your email: &nbsp; {user.email}</div>
          <div className="profileItems">
            Your display name: &nbsp;{" "}
            {user.displayName ? user.displayName : "Not Set"}
          </div>
          <div className="profileItems">
            Email Verified: &nbsp; {user.emailVerified ? "Okay" : "No"}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
