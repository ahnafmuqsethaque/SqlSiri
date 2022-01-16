import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from './Message'
import Progress from './Progress'

const FileUpload = () => {
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file); // this 'file' should be defined in back end refer: https://www.youtube.com/watch?v=b6Oe2puTdMQ

    // axios.post('//localhost:8000/upload', data)
    // .then((e)=>{
    //     console.log('Success');
    // })
    // .catch((e)=> {
    //     console.log("error")
    // })
    try {
      const res = await axios.post("/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: progressEvent => {
            setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
            // clear percentage -- turns the progress bar turns to zero
            setTimeout(() =>  setUploadPercentage(0), 10000);
        }

      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
        console.log("There was a problem with the server | Error code 500");
      } else {
          setMessage(err.response.data.msg);
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <div className="container mt-4">
      <Fragment>
          {message ? <Message msg={message}/> : null}
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={handleOnChange}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>
          <Progress percentage={uploadPercentage} />
          <input
            className="btn btn-primary btn-block mt-4"
            type="submit"
            value="Upload"
          />
        </form>
        {/* { uploadedFile ? <div>} */}
      </Fragment>
    </div>
  );
};

export default FileUpload;
