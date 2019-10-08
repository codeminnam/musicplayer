
//import * as path from 'path';
var express = require('express');
var app = express();
var path = require('path');
var appDir = path.dirname(require.main.filename);

app.use(express.static(appDir + '/public'));
app.use('/js', express.static(path.resolve('build')));
app.listen(3000,  () => console.log("Example app listening on port 3000!"));