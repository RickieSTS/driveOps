const dotenv = require('dotenv').config()
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(require("./routes/v1/routes"))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
  