module.exports = (Model) => {
    return (req, res) => {
	    const body = req.body;
	    Model.create(body, (err, data) => {
        	if (err) return res.status(500).json({ msg: err.message });
        	return res.status(201).json(data);
		});
	};
};
