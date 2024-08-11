const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api', leadRoutes);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
