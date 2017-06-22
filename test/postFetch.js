const chai = require('chai');
const chaiHttp = require('chai-http');
// for compatibility with ES6 and ES5 exports
const server = require('../lib/server/server').default;
const should = chai.should();
const port = require('../config.json').port;
chai.use(chaiHttp);


describe('postFetch', function () {
	this.timeout(10000);
	//change this URL to test for any webpage
	const URI_TO_TEST = 'https://krshubham.github.io';
	it('should make a post request to the fetch route', (done) => {
		chai.request(server)
		.post('/fetch')
		.send({url: URI_TO_TEST})
		.end((err,res) => {
			res.should.have.status(200);
			res.should.be.a('object');
			done();
		});
	});

	it('should check for error message in case of invalid url', (done) => {
		//sending a wrong URL
		const URI_TO_TEST = 'htp://shubham';
		chai.request(server)
		.post('/fetch')
		.send({url: URI_TO_TEST})
		.end((err,res) => {
			res.should.have.status(200);
			res.should.be.a('object');
			res.body.should.have.property('error');
			done();
		});
	});
});
