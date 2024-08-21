const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes); // Ensure userRoutes is a router instance
app.use('/api/transactions', transactionRoutes); // Ensure transactionRoutes is a router instance
app.use('/api/ai', aiRoutes); // Ensure aiRoutes is a router instance

mongoose.connect('mongodb://localhost:27017/personal-finance', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
