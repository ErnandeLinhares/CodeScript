module.exports = (Model) => {
	return (req, res) => {
  		const query = {_id: req.params.id};
		Model.remove(query, (err, data) => {
			if (err) return res.status(500).json({ msg: err.message });
	        //return res.status(205).json(data);
	        return res.json(data);
		});
  	};
};
