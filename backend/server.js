const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/userRouter.js");
app.use("/newsapi/", router);

app.get("/", (req, res) => {
  res.json({ message: "Spread Happiness :)" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
