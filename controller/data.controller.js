const Data = require("../model/data");

exports.createData = async (req, res) => {
  try {
    const data = new Data(req.body);
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).send();
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDataById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "age", "register", "degree"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).send();
    }

    updates.forEach((update) => (data[update] = req.body[update]));
    await data.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDataById = async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).send();
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
