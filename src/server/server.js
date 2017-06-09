/**
 * Created by ks on 08/06/17.
 */

import express from 'express';
import routes from '../routes';
import bodyParser from 'body-parser';
const config = require('../../config.json');


const port = config.port;
const server = express();

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());


routes(server);


/**
 * @listen {port} config.port
 */
server.listen(port, () => {
    "use strict";
    console.log(`Server is listening on port ${port}`);
});


export default server;






