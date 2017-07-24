let request = require('request');

request = request.defaults({jar: true});

export default (teemId) => {
	return new Promise((resolve,reject) => {
		request.post('https://swellrt.teem.works/auth/signin?r=none', {
			form:{
				address:'_anonymous_',
				password: ''
			}
		}, function () {
			let encodableObj = JSON.stringify({
				'root.type': 'project' ,
				'root.id': teemId
			});
			let encodedURL = encodeURIComponent(encodableObj);
			request(`https://swellrt.teem.works/swell/model?q=${encodedURL}`, (err,res, body) => {
				if(body){
					resolve(JSON.parse(body));
				}
				else if(err){
					reject(err);
				}
			});
		});
	});
}
