const { Schema, model } = require('mongoose');
const mongoose = require("mongoose")

// Define the Mongoose Schema for the Story
const storySchema = new Schema({
    storyName: {
        type: String,
        required: true,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    story: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    prompt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prompt',
        required: true,
    },
    rating: {
        type: Number,
        default: 2,
        max: 5,
        min: 1
    }
});

const Story = model('Story', storySchema);
module.exports = Story
