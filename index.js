const express = require("express");
require('express-group-routes');
const app = express();
const root = __dirname + "/public";
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Application started and Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(root + "/index.html");
});

// Images // Statics
app.use('/assets/images', express.static(__dirname + '/src/images'));

// Styles // Statics
app.use('/assets/styles', express.static(__dirname + '/src/styles'));

// Webfonts // Statics
app.use('/assets/webfonts', express.static(__dirname + '/src/webfonts'));

// JS
app.group("/assets/js", (router) => {
  router.get('/jquery.js', function(req, res) {
      res.sendFile(__dirname+'/node_modules/jquery/dist/jquery.js');
  });
  router.get('/jquery.min.js', function(req, res) {
      res.sendFile(__dirname+'/node_modules/jquery/dist/jquery.min.js');
  });
  router.get('/cropper.js', function(req, res) {
      res.sendFile(__dirname+'/node_modules/cropperjs/dist/cropper.js');
  });
  router.get('/jquery-cropper.js', function(req, res) {
      res.sendFile(__dirname+'/node_modules/jquery-cropper/dist/jquery-cropper.js');
  });
  router.get('/bootstrap.min.js', function(req, res) {
    res.sendFile(__dirname+'/node_modules/bootstrap/dist/js/bootstrap.min.js');
  });
  router.get('/tesseract.min.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/tesseract.js/dist/tesseract.min.js');
  });
  router.get('/sweetalert2.all.min.js', function(req, res) {
    res.sendFile(__dirname + '/node_modules/sweetalert2/dist/sweetalert2.all.min.js');
  });
});

// CSS
app.group("/assets/css", (router) => {
  router.get('/bootstrap.min.css', function(req, res) {
    res.sendFile(__dirname+'/node_modules/bootstrap/dist/css/bootstrap.min.css');
  });  
  router.get('/cropper.css', function(req, res) {
    res.sendFile(__dirname+'/node_modules/cropperjs/dist/cropper.css');
  });  
  router.get('/sweetalert2.css', function(req, res) {
    res.sendFile(__dirname+'/node_modules/sweetalert2/dist/sweetalert2.min.css');
  });  
});
