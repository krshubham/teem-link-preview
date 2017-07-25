import mustache from 'mustache';
import fs from 'fs';
import path from 'path';

function constructHTML(ogpData){
  'use strict';
  return new Promise((resolve, reject) => {
    try{
      let projectData = ogpData.result[0].root;
      if(projectData.image){
        let imageURLarray = projectData.image.url.split('/');
        let imageId = imageURLarray[imageURLarray.length - 1];
        projectData.image = {
          url: imageId
        };
      }
      let HTML = mustache.render(fs.readFileSync(path.join(__dirname,'../../../resources/html/template.html')).toString(),projectData);
      resolve(HTML);
    }
    catch(err){
      reject(err);
    }
  });
}

export default constructHTML;