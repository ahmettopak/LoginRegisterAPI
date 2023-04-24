const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const db = require("./config/database.js")
const Auth = require("./routes/auth.js")

dotenv.config();
app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
const PORT = process.env.PORT || 5000;
db();
app.get('/', (req, res) => {
    res.json({ message: "Merhaba" })
})
app.use('/', Auth)
app.listen(PORT, () => {
    console.log('server is running on port: %s', "http://localhost:" + PORT);
})