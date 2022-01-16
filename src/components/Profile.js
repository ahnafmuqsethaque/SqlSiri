import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Profile = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 275, backgroundColor: "pink" }}>
        <CardContent>
          <Stack
            spacing={2}
            direction="column"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Avatar alt="Doge" src="../assets/doge.jpeg" />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              NAME
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Details here
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
