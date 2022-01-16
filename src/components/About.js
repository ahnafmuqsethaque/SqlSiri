import React from "react";
import Profile from "./Profile";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "../assets/istockphoto.jpg";
import Image1 from "../assets/doge.jpeg";


const About = () => {
  return (
    <div style={{backgroundColor: "#2D2424"}}>
      <Stack
        spacing={5}
        direction="column"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: 50 }} color="#B85C38" gutterBottom>
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
            <Profile name = "Ngoc" image = {Image1}/>
            <Profile name = "Tabreek" image = {Image}/>
          </Stack>
          <Stack
            spacing={5}
            direction="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Profile name = "Ahnaf"/>
            <Profile name = "Kishor"/>
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
