import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from 'axios';

const Browse = () => {
const [file, setFile] = useState([]);
const [filename, setFilename] = useState("");


    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data =  new FormData();
        data.append('file', file);
        axios.post('//localhost:8000/upload', data)
        .then((e)=>{
            console.log('Success');
        })
        .catch((e)=> {
            console.log("error")
        })
    }
    return (
        <div>
        <form>
            <input
            type='file'
            id='customFile'
            onChange={handleOnChange} />

        </form>

        <Button variant="contained">Browse</Button>
        </div>
    )
}

export default Browse
