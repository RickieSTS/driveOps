var express = require("express");
var router = express.Router();
const session = require('express-session');
const Redis = require("redis");
const {RedisStore} = require("connect-redis");

const redisClient = Redis.createClient({
    url: "redis://redis:6379",
});

redisClient.connect().catch(console.error);


let redisStore = new RedisStore({
    client: redisClient,
    host: 'localhost',
    port: 6379,
});


router.use(
  session({
    store: redisStore,
    name: "_sid",
    secret: process.env.SESSION_SECRET || "test",
    resave: false,
    cookie: { secure: false, maxAge: 60000 }, // Set to secure:false and expire in 1 minute for demo purposes
    saveUninitialized: false,
  })
);

router.use("/api/v1/auth", require("./auth"));

module.exports = router;
