require('dotenv').config();
const mongoose = require('mongoose');

// MongoDB Url
let DB_URL = process.env.DB_URL;

//database connection
mongoose
  .connect(DB_URL, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log(`connection successful `);
  })
  .catch((err) => {
    console.log(`error connecting to database`, err);
  });
