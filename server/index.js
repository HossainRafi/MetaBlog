const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// routes
const blogRoutes = require("./src/routes/blog.routes");
app.use("/blogs", blogRoutes);

// mongoose configuration & database connection
async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Meta Blog Server Is Running............!");
  });
}

main()
  .then(() => console.log("MongoDB connected successfully........!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
