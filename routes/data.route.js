const router = require("express").Router();
const {
  createData,
  getAllData,
  getDataById,
  updateDataById,
  deleteDataById,
} = require("../controller/data.controller");

router.post("/", createData);
router.get("/", getAllData);
router.get("/:id", getDataById);
router.put("/:id", updateDataById);
router.delete("/:id", deleteDataById);

module.exports = router;
