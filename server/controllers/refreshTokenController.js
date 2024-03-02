const jwt = require("jsonwebtoken");
require("dotenv").config();

const handlerRefreshToken = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);

    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({ refreshToken });

    if (!foundUser) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decode) => {
        if (err || foundUser.username !== decode.username) {
          return res.sendStatus(403);
        }

        const accessToken = jwt.sign(
          { username: decode.username },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handlerRefreshToken };
