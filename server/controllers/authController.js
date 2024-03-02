const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email and password are required" });
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res
        .status(401)
        .json({ message: `No user with the email ${email} found.` });
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      const accessToken = jwt.sign(
        { email: foundUser.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      const refreshToken = jwt.sign(
        { email: foundUser.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
      );
      const currentUser = { ...foundUser.toObject(), refreshToken };
      await User.findByIdAndUpdate(foundUser._id, currentUser);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken });
    } else {
      return res.status(401).json({ message: `Incorrect password` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handleLogin };
