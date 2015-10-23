var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    response.json({message: "hello"});
});

function emotions(file, uid) {
    return file;
}

function seed(file, uid) {

}

app.post('/faceapi/seed', upload.single('photo'), function(req, res, next) {
    var f = req.file;
    var uid = req.userid;
    seed(f, uid);
    res.json(emotions(f, uid));
});

app.post('/faceapi/emotions', upload.single('photo'), function(req, res, next) {
    var f = req.file;
    var uid = req.userid;
    res.json(emotions(f, uid));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


