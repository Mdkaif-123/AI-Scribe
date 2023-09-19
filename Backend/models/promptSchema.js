const { Schema, model } = require('mongoose');

// Define the Mongoose Schema
const promptSchema = new Schema({
    story: {
        type: String,
        required: true,
    },
    emotion: String,
    humor: String,
    thrill: String,
    suspense: String,
    storyType: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    wordLimit: {
        type: Number,
        required: true,
    },
});

// Create a Mongoose model based on the schema
const Prompt = model('Prompt', promptSchema);

module.exports = Prompt;
