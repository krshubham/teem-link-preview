import express from 'express';
import ogscraper from './utils/ogscraper';
import constructHTML from './utils/constructHTML';


const router = express.Router();


router.get('/:id', (req,res) => {
	let b64ID = req.params.id;
	let teemId = Buffer.from(b64ID, 'base64').toString();
	ogscraper(teemId)
	.then(constructHTML)
	.then((html) => {
		res.send(html);
	})
	.catch((err) => {
		res.send(err);
	});
});

export default router;