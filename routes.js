const { Router } = require("express");
const router = Router();
const dataRoutes = require("./routes/data.route");

router.use(dataRoutes);

module.exports = router;
