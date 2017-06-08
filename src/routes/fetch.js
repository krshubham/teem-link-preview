/**
 * Created by ks on 08/06/17.
 */

import express from 'express';
import Metascraper from 'metascraper';


const router = express.Router();

router.post('/', (req,res) => {
    const scrapeURL = req.body.url;

    //set the 'Access-Control-Allow-Origin' header to '*' so that we can have access to this server
    res.set('Access-Control-Allow-Origin', '*');

    Metascraper.
        scrapeUrl(scrapeURL)
        .then((metadata) => {
            res.json(metadata);
        })
        .catch((err) => {
            res.json(err);
        });

});

export default router;

