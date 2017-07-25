/**
* Created by ks on 08/06/17.
*/

import express from 'express';
import Metascraper from 'metascraper';
import validator from 'validator';


const router = express.Router();

router.post('/', (req,res) => {
  'use strict';
  const scrapeURL = req.body.url;

  //set the 'Access-Control-Allow-Origin' header to '*' so that we can have access to this server
  res.set('Access-Control-Allow-Origin', '*');

  if(validator.isURL(scrapeURL)){
    Metascraper
    .scrapeUrl(scrapeURL)
    .then((metadata) => {
      res.json(metadata);
    })
    .catch((err) => {
      res.json(err);
    });
  }
  else{
    const URL_ERROR = {
      error: 'The URL is not in correct format'
    };
    res.json(URL_ERROR);
  }

});

export default router;

