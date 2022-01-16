import React from "react";
import Profile from "./Profile";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div>
      <Stack
        spacing={2}
        direction="column"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ABOUT SECTION
        </Typography>
        <Stack
          spacing={2}
          direction="column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Profile />
            <Profile />
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Profile />
            <Profile />
          </Stack>
        </Stack>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          footer notes/details
        </Typography>
      </Stack>
    </div>
  );
};

{
  /* ---------

|--      --
--      --

--------- */
}

export default About;
