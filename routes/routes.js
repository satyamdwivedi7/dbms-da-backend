const { Router } = require("express");
const router = Router();
const dataRoutes = require("./data.route");

router.use(dataRoutes);

module.exports = router;
