const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const cors = require('cors')
var admin = require('firebase-admin');
var _ = require('lodash');

let app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
app.get('/getquestions',async function(req, res){
	 });


let server = app.listen(3000, function() {
        console.log('Server is listening on port 3000')
    });
