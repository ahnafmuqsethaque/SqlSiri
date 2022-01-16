import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Profile = (props) => {
  return (
    <div>
      <Card sx={{ minWidth: 450, minHeight: 450, backgroundColor: "#5C3D2E" }}>
        <CardContent>
          <Stack
            spacing={2}
            direction="column"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Avatar
            alt= {props.name}
            src= {props.image}
            sx={{ width: 100, height: 100 }}
            />

            <Typography
              sx={{ fontSize: 16, font: "Lato" }}
              color="#E0C097"
              gutterBottom
            >
              {props.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="#E0C097"
              gutterBottom
            >
              {props.detail}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
