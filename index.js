var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    response.json({message: "hello"});
});

function emotions(file) {
    return file;
}

app.post('/faceapi/getEmotion', upload.single('photo'), function(req, res, next) {
    var f = req.file;
    res.json(emotions(f));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


