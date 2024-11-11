const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    register: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    }
});

const Data = mongoose.model("Data", dataSchema);
module.exports = Data;