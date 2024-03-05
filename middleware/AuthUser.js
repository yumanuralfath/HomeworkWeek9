import users from "../models/users.js";

export const verifyUser = async (req, res, next) => {
  try {
    if (!req.session.token) {
      return res.status(401).json({ msg: "Please Login to your Account" });
    }

    const user = await users.findOne({
      attributes: ["id", "email", "gender", "role"],
      where: {
        id: req.session.userID,
      },
    });
    if (!user) {
      return res
        .status(404)
        .json({ msg: "User Not Found , Please Login Again" });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
