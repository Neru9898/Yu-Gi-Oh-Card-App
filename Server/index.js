const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const userList = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/signup", (req, res) => {
  const newUser = req.body;
  const findUser = userList.find((user) => user.name === newUser.name);

  if (!findUser) {
    userList.push(newUser);
    res.status(201).json({ success: true, msg: "User has been created" });
  } else {
    res.status(400).json({ success: false, msg: "User already exist" });
  }
  console.log(userList);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
