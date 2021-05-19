const bodyParser = require('body-parser');

const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log("Server is running!")); 