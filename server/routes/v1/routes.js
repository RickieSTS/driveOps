const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const session = require("express-session");
const Redis = require("redis");
const { RedisStore } = require("connect-redis");

const redisClient = Redis.createClient({
  url: "redis://redis:6379",
  host: "localhost",
});

redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
  host: "localhost",
  port: 6379,
});

router.use(
  session({
    store: redisStore,
    name: "_sid",
    secret: process.env.SESSION_SECRET || "localSecretExample",
    resave: false,
    cookie: {
      secure: process.env.COOKIE_SECURE || true,
      maxAge: 1000 * 60 * 30,
      httpOnly: true,
    },
    saveUninitialized: false,
  })
);

router.use("/api/v1/auth", require("./auth"));

module.exports = router;
