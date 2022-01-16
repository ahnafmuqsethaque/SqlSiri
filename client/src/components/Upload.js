import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../styles/Dropzone.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [filename, setFilename] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} style={{ width: "200px" }} alt="preview" />
    </div>
  ));

  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <div className="dropzone">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p> Drop file here</p>
          <CloudUploadIcon style={{ justifyContent: "center" }} />
        </div>
        
      </div>
      <Stack spacing={4} direction="row">
        <Button variant="outlined">Upload</Button>
        <Button variant="contained">Browse</Button>
      </Stack>
      <div>{images}</div>
    </Stack>
  );
};

export default Upload;
