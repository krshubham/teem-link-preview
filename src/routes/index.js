import fetch from './fetch';
import teemSEOHandler from './teemSEOHandler';

function handler(server){
    'use strict';
    server.use('/fetch', fetch);
    server.use('/teems', teemSEOHandler);
}

export default handler;
