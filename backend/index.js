require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDatabase = require("./config/db");
const ErrorHandler = require("./middleware/error");
const cors = require('cors');
const generateScript = require('./routes/generateScript');
const users = require('./routes/users');
const createVideo = require('./routes/createVideo');
const getVideo = require('./routes/getVideo');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "https://ai-generated-comedy-show-3tl8.vercel.app"
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
connectDatabase();
app.use(generateScript);
app.use(createVideo);
app.use(getVideo);
app.use(users);
app.use(ErrorHandler);
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
