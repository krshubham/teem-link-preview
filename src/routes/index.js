import fetch from './fetch';
import teemSEOHandler from './teemSEOHandler';

function handler(server){
    server.use('/fetch', fetch);
    server.use('/teems', teemSEOHandler);
}

export default handler;
