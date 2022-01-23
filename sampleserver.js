const express = require("express");
const fileUpload = require("express-fileupload");
let {PythonShell} = require('python-shell');
const { default: App } = require("./src/App");

const app = express();

app.use(fileUpload());

options = {
    args: "give me all students with age greater than 12"
}
PythonShell.run('query.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during executio
    console.log('results: %j', results[0]);
  });



//upload endpoint
//POST request
app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No file was uploaded'});
    }

    const file = req.files.file;
    //TODO: check path
    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
})

app.listen(5000, () => console.log('Server Started...'))
