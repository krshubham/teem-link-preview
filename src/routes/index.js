import fetch from './fetch';


function handler(server){
    server.use('/fetch', fetch);
}

export default handler;
