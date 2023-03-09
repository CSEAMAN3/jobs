const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

const getJobs = require("./lib/job");
// const notFound = require("./lib/notFound")

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/jobs", getJobs);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
