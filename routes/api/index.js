const path = require("path");
const router = require("express").Router();
const taskRoutes = require("./todo");

// Book routes
router.use("/todo", taskRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;