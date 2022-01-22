import React, {useState} from 'react'
import NavBar from './NavBar'
import SpeechToText from './Speech-to-text'
import Button from "@mui/material/Button";
import Output from './Output'

const val = 0;
const Home = () => {
const [check, setCheck] = useState(null);
 const handleClick = (e) => {
   e.preventDefault();
    setCheck(1);
  };
    return (
        <div>
          <NavBar />
          <SpeechToText />
          <Button onClick={handleClick} variant="contained">Show Result</Button>
          {check ? <Output/> : null}
        </div>
    )
}

export default Home
