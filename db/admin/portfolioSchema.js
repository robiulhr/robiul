const mongoose = require("mongoose");
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const portfolioSchema = new mongoose.Schema({
    portfolioTitle: {
        type: String,
        required: [true, "Please provide portfolio title."],
        trim: true,
        maxlength: [40, "You have reached the max length."],
        minlength: [3, "Your Title is too short."]
    },
    portfolioimage: {
        type: String,
        required: [true, "Portfolio image is required."],
        trim: true,
    },
    inputTextarea: {
        type: String,
        required: [true, "Portfolio Description is required."],
        trim: true,
        maxlength: [400, "You have reached the max length."],
        minlength: [3, "Your name is too short."]
    },
    catagory: {
        type: Array,
        required: [true, "catagory is required"],
        default: ['others']
    },
    createdTime: {
        type: Date,
        default: new Date(Date.now()).toDateString()
    }
});

const portfolio = mongoose.model("portfolio", portfolioSchema);
module.exports = portfolio;