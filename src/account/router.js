import express from "express";

const router = express.Router();

router.get("/echo/:token", async (req, res) => {
	try {
		const token = req.params.token;
		// import josn file here as data
		// const data = import(/docs/echo.json)
		return res.status(200).json(data);
	} catch (err) {
		return res.status(500).json(err);
	}
});

export default router;
