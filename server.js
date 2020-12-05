const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/HomeTasks"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/HomeTasks/index.html"));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
