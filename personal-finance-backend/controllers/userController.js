const User = require('../models/user');

require('dotenv').config(); // Load environment variables from .env file
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token handling


const secretKey = process.env.SECRET_KEY;


class UserController {
    static async register(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
            console.log("new user registered")
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async login(req, res) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ username });

            if (!user) {
                return res.status(404).send({ message: "User does not exist" });
            }

            if (user.password !== password) {
                return res.status(400).send({ message: "One of the inputs is wrong" });
            }

            // Generate a JWT token
            try {
                const token = jwt.sign({ userId: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
                res.status(200).send({ message: "User exists", token });
            } catch (jwtError) {
                console.error("JWT signing error:", jwtError);
                res.status(500).send({ message: "Error generating token" });
            }
        } catch (error) {
            console.error("Login error:", error);
            res.status(500).send({ message: "Server error", error });
        }
    }
     
}

module.exports = UserController;
