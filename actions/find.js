module.exports = (Model) => {
	return (req, res) => {
	    const query = {};
	    Model.find(query, (err, data) => {
	        if (err) return res.status(500).json({ msg: err.message });
	        return res.json(data);
		});
  	};
};
