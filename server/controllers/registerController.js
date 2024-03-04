const User = require("../model/user");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password, email, confirmPassword } = req.body;
    if (!username || !password || !email || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirm password fields do not match" });
    }

    const duplicateEmail = await User.findOne({ email });

    if (duplicateEmail) {
      return res
        .status(409)
        .json({ message: "Username with this email id already exists" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPwd, email };
    await User.create(newUser);

    res.status(201).json({ success: `New user ${username} created!` });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handleNewUser };
