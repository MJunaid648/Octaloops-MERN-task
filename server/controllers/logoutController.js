const User = require("../model/user");

const handlerLogout = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);

    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({ refreshToken });

    if (!foundUser) {
      res.clearCookie("jwt", { httpOnly: true, sameSite: "None" });
      return res.sendStatus(204);
    }
    foundUser.refreshToken = "";
    await foundUser.save();

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None" });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handlerLogout };
