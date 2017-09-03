import mustache from 'mustache';
import fs from 'fs';
import path from 'path';

function constructHTML(ogpData){
  'use strict';
  return new Promise((resolve, reject) => {
    try{
      let projectData = ogpData.result[0].root;
      console.log(projectData);
      if(!projectData.image){
          projectData.image = {
              url: 'https://app.teem.works/images/project_blue.svg'
          };
      }
      console.log(projectData);
      let HTML = mustache.render(fs.readFileSync(path.join(__dirname,'../../../resources/html/template.html')).toString(),projectData);
      resolve(HTML);
    }
    catch(err){
      reject(err);
    }
  });
}

export default constructHTML;