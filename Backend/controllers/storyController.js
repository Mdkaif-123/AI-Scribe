/*
    Prompt example --

    Create a story on the basis of this line 
    ``` In a city where everyone can fly... ```

    ## Followed by this format and criteria

    -emotion : sad
    -humor: little
    -suspence: intermdiate
    -thrill : little
    -story type: fiction
    -user type: [child, teen, young, old]

    [word target : 100]
*/

const OpenAI = require("openai");
const Story = require('../models/storySchema')
const Prompt = require('../models/promptSchema')
const User = require('../models/userSchema')

const openai = new OpenAI({
    apiKey: "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",
});




exports.generateStory = async (req, res) => {
    try {
        // Extract data of user
        const user = await User.findById(req.user)
        if (!user) return res.status(404).json({ success: false, message: "No user found" })

        const { story, emotion, humor, thrill, suspense, storyType, userType, wordLimit } = req.body

        if (!story || !storyType || !userType || !wordLimit) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const prompt = `
        ${story}
        ## Followed by this format and criteria
        
        -emotion : ${emotion}
        -humor: ${humor}
        -suspence: ${suspense}
        -thrill : ${thrill}
        -story type: ${storyType}
        -user type: ${userType}
        [word target : ${wordLimit}]
        `

        console.log("Fetching...");
        const response = await openai.completions.create({
            model: "gpt-3.5-turbo-instruct",
            prompt: prompt,
            temperature: 0,
            max_tokens: 2048,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        res.status(200).json({ success: true, message: "Successfully Created the story", story: response.choices[0].text })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error })
    }
}




// Get top voted and user generated stories
exports.getStories = async (req, res) => {
    try {
        const { storyType } = req.body

        if (!storyType) return res.status(400).json({ success: false, message: "Please share the story type" })

        let stories = null;

        // if user want top rated story
        if (storyType === 'topVoted') stories = await Story.find({ userId: req.user, rating: { $gt: 3 } }).populate("prompt")

        // if user want his story
        if (storyType === 'myStory') stories = await Story.find({ userId: req.user, }).populate("prompt")

        // if invalid story type
        if (!stories) return res.status(400).json({ success: false, message: "Please enter a valid story type" })

        res.status(200).json({ success: true, message: "All the up voted stories", stories })
    } catch (error) {
        console.error('Error saving story:', error);
        res.status(500).json({ success: false, message: "Internal server error", error })
    }
}





// Save a story
exports.saveStory = async (req, res) => {
    try {
        // Extract data of user
        const user = await User.findById(req.user)
        if (!user) return res.status(404).json({ success: false, message: "No user found" })

        // Extract data of story
        const { storyName, storyDescription, rating } = req.body;

        // Extract data of prompt
        const { storyPrompt, emotion, humor, thrill, suspense, storyType, userType, wordLimit } = req.body;

        // Check if required fields are missing of story
        if (!storyName || !storyDescription) return res.status(400).json({ error: 'Missing required fields' });


        // Check if required fields are missing of prompt
        if (!storyPrompt || !storyType || !userType || !wordLimit) return res.status(400).json({ error: 'Missing required fields' });


        if (rating && (rating < 0 || rating > 5)) return res.status(400).json({ success: false, message: "Rating should be between 1 to 5" })

        // Create a new Prompt document
        const newPrompt = new Prompt({
            story: storyPrompt,
            emotion,
            humor,
            thrill,
            suspense,
            storyType,
            userType,
            wordLimit,
        })

        // Save the new prompt to the database
        await newPrompt.save();

        // Create a new Story document
        const newStory = new Story({
            storyName,
            rating,
            story: storyDescription,
            prompt: newPrompt._id,
            userId: user._id
        });

        // Save the new story to the database
        await newStory.save();

        return res.status(201).json({ message: 'Story saved successfully', story: newStory });
    } catch (error) {
        console.error('Error saving story:', error);
        res.status(500).json({ success: false, message: "Internal server error", error })
    }
};



// Update a story by ID
exports.updateStory = async (req, res) => {
    try {

        // Extract data of user
        const user = await User.findById(req.user)
        if (!user) return res.status(404).json({ success: false, message: "No user found" })

        const { storyName, story, rating } = req.body;
        const { id } = req.params;

        // Check if required fields are missing
        if (!storyName || !story) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Find the story by ID and update it
        const updatedStory = await Story.findByIdAndUpdate(id, { storyName, story, rating }, { new: true });

        if (!updatedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }

        return res.status(200).json({ message: 'Story updated successfully', story: updatedStory });
    } catch (error) {
        console.error('Error updating story:', error);
        res.status(500).json({ success: false, message: "Internal server error", error })
    }
};



// Delete a story by ID
exports.deleteStory = async (req, res) => {
    try {
        // Extract data of user
        const user = await User.findById(req.user)
        if (!user) return res.status(404).json({ success: false, message: "No user found" })

        const { id } = req.params;

        // Find the story by ID and delete it
        const deletedStory = await Story.findByIdAndDelete(id);

        if (!deletedStory) {
            return res.status(500).json({ success: false, message: "Story not found" })
        }

        return res.status(200).json({ success: true, message: 'Story deleted successfully' });
    } catch (error) {
        console.error('Error deleting story:', error);
        res.status(500).json({ success: false, message: "Internal server error", error })
    }
};
