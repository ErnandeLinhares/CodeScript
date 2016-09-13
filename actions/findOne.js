module.exports = (Model) => {
	return (req, res) => {
		const query = {_id: req.params.id};
		Model.findOne(query, (err, data) => {
			if (err) return res.status(500).json({ msg: err.message });
	        return res.json(data);
		});
  	};
};
