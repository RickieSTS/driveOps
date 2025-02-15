const dotenv = require('dotenv').config()
const express = require("express");
const https = require("https")
const path = require("path")
const fs = require("fs")
const app = express();

const PORT = process.env.PORT_HTTPS || 3001;

const tlsServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app)

app.use(require("./routes/v1/routes"))

tlsServer.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
