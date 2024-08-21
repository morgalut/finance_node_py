const User = require('../models/user');

class UserController {
    static async register(req, res) {
        try {
            const user = new User(req.body);
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    static async login(req, res) {
        // Implement login logic
    }
}

module.exports = UserController;
