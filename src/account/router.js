import express from "express";

const router = express.Router();

router.get("/echo/:token", async (req, res) => {
	try {
		const token = req.params.token;
		return res.status(200).json({ token: token });
	} catch (err) {
		return res.status(500).json(err);
	}
});

export default router;
