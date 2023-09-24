const User = require('../models/userSchema'); // Import the User model
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


// user sign up
exports.signUp = async (req, res) => {
    try {
        const { email, userName, password } = req.body;

        // Check if required fields are missing
        if (!email || !userName || !password) return res.status(400).json({ error: 'Missing required fields' });

        // Check if password is appropriate
        if (password.length < 8) return res.status(400).json({ success: false, message: 'Password must be greater than 8 character' });

        // Check if the user with the provided email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ success: false, message: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new User document with hashed password
        const newUser = new User({ email, userName, password: hashedPassword });

        // Save the new user to the database
        await newUser.save();

        // Generate a JWT token with the user ID
        const token = jwt.sign({ userId: newUser._id }, process.env.AUTH_SECRET_KEY, { expiresIn: '8d' });
        return res.status(201).json({ message: 'User registered successfully', user: newUser, token });

    } catch (error) {
        console.error('Error signing up:', error);
        return res.status(500).json({ success: false, message: 'Internal server error', error });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if required fields are missing
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate a JWT token with the user ID
        const token = jwt.sign({ userId: user._id }, process.env.AUTH_SECRET_KEY, { expiresIn: '8d' });
        return res.status(200).json({ success: true, message: 'Login successful', user, token })

    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ success: false, message: 'Internal server error', error });
    }
};