const router = require("express").Router();
const {
  createData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
} = require("../controller/data.controller");

router.post("/data", createData);
router.get("/data", getAllData);
router.get("/data/:id", getDataById);
router.put("/data/:id", updateDataById);
router.delete("/data/:id", deleteDataById);

module.exports = router;
