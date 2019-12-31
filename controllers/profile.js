

const handleprofileget=(req,res,db)=>
{
	const {id}=req.params;
	db.select('*').from('users').where({
		id: id
	})
	.then(user =>
	{
		if(user.length)
		{
			res.json(user);
		}
		else
		{
			res.status(400).json('Not found')
		}
	})
	.catch(err=>res.status(400).json('user not found'))
}

module.exports={
	handleprofileget: handleprofileget
};