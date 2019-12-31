
const Clarifai = require('clarifai')

const app = new Clarifai.App({
 apiKey: '16193d8f1c9044ae9eebbe873a7da00d'

});

const handleapicall=(req,res)=>{
	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data=>res.json(data))
	.catch(err=>res.status(400).json('unable to work with api'))
}

const handleimageput=(req,res,db)=>{
	const {id}=req.body;
	    db('users').where('id', '=', id)
	    .increment('entries',1)
	    .returning('entries')
	    .then(entries => res.json(entries[0]))
	    .catch(err => res.status(400).json('entries not found'))

}

module.exports={
	handleimageput: handleimageput,
	handleapicall : handleapicall
};