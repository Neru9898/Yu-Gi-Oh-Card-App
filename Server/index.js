const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const userList = [{ name: "User2", password: "asdlfkjas!4334" }];
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

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name && password) {
    const foundUser = userList.find(
      (e) => e.name === name && e.password === password
    );

    if (foundUser)
      res.status(200).json({ success: true, msg: `Welcome back ${name}` });
    else
      res
        .status(400)
        .json({ success: false, msg: `No User with the name: ${name}` });
  } else {
    res.status(400).json({ success: false, msg: "User doesn't exist" });
  }
  // console.log(userList);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
