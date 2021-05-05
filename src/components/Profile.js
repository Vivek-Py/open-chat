import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia } from "@material-ui/core";
import "../style/profileStyle.css";

const Profile = (props) => {
  const { user } = props;

  return (
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
        <div>Your email: &nbsp; {user.email}</div>
        <div>
          Your display name: &nbsp;{" "}
          {user.displayName ? user.displayName : "Not Set"}
        </div>
        <div>Email Verified: &nbsp; {user.emailVerified ? "Okay" : "No"}</div>
      </CardContent>
    </Card>
  );
};

export default Profile;
