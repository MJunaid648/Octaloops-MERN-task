const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../model/user");

const handlerRefreshToken = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    // console.log("second,", refreshToken);

    const foundUser = await User.findOne({ refreshToken });

    // console.log(foundUser);

    if (!foundUser) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err || foundUser.email !== decode.email) {
          console.log("wrong token");
          return res.sendStatus(403);
        }

        const accessToken = jwt.sign(
          { username: decode.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "12s" }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handlerRefreshToken };

module.exports = { handlerRefreshToken };
