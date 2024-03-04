const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("./middleware/logEvents").logger;
const errorHandler = require("./middleware/errorHandler");
const credentials = require("./middleware/credentials");
const verifyJWT = require("./middleware/verifyJWT");
const app = express();
const PORT = process.env.PORT || 5000;

async function run() {
  await mongoose
    .connect(
      "mongodb+srv://648mjunaid:juni8808@cluster0.yn2nbl8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
}
run();

app.use(logger);

// app.use(credentials);

app.use(cors({ credentials: true, origin: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/register", require("./routes/api/register.js"));
app.use("/login", require("./routes/api/auth.js"));

// app.use(verifyJWT);
app.use("/refresh", require("./routes/api/refresh.js"));
app.use("/logout", require("./routes/api/logout.js"));
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("404")) {
    res.status(404).send("unauthorized accces/login ");
  } else if (req.accepts("json")) {
    res.json({ error: "unauthorized accces/login" });
  } else if (req.type("txt")) {
    res.send("404 not found");
  }
});
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("server is listening on ", PORT);
});
