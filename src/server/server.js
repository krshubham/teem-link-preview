/**
* Created by ks on 08/06/17.
*/
import express from 'express';
import routes from '../routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
require('dotenv').config();
const config = require('../../config.json');


const port = config.port;
const server = express();


//create a write stream for the logs in the append mode
let accessLogStream = fs.createWriteStream(path.join(__dirname,'../../log/access.log'),{ flags: 'a'});
server.use(morgan('combined', {stream: accessLogStream}));
server.use(morgan('combined'));

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.all('*', (req,res,next) => {
  'use strict';
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
});

routes(server);


/**
* @listen {port} config.port
*/
server.listen(port, () => {
  'use strict';
  console.log(`Server is listening on port ${port}`);
});


export default server;
