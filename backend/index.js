require('dotenv').config();
const express = require('express');
const cors = require('cors');
const generateScript = require('./routes/generateScript');
const createVideo = require('./routes/createVideo');
const getVideo = require('./routes/getVideo');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.use(generateScript);
app.use(createVideo);
app.use(getVideo);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
