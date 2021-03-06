module.exports = (Model) => {
	return (req, res) => {
		const query = {_id: req.params.id};
		const body = req.body;
		Model.update(query, body, (err, data) => {
			if (err) return res.status(500).json({ msg: err.message });
	        return res.json(data);
		});
	};
};
