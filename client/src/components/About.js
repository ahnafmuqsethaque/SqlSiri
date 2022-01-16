import React from "react";
import Profile from "./Profile";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {ahnaf, tabreek, ngoc, Image} from "../assets";


const About = () => {

    
  return (
    <div style={{backgroundColor: "#2D2424"}}>
      <Stack
        spacing={5}
        direction="column"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: 56 }} color="#B85C38" gutterBottom>
          ABOUT US
        </Typography>
        <Stack
          spacing={5}
          direction="column"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Stack
            spacing={5}
            direction="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Profile name = "Ngoc" image = {ngoc} school = "University of British Columbia" major = "Computer Science + Statistics"/>
            <Profile name = "Tabreek" image = {tabreek} school = "University of British Columbia" major = "Computer Science"/>
          </Stack>
          <Stack
            spacing={5}
            direction="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Profile name = "Ahnaf" image = {ahnaf} school = "University of British Columbia" major = "Computer Science + Statistics"/>
            <Profile name = "Kishor" image = {Image} school = "University of Waterloo" major = "Mathematics"/>
          </Stack>
        </Stack>

        <Typography sx={{ fontSize: 14 }} color="#2D2424" gutterBottom>
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