const User = require("../Model/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    if (user) {
      console.log("user Found");
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      await user.save();

      res.status(200).json({
        statusCode: 200,
        message: "success",
        email: email,
        token: token,
        expiresIn: "2h",
      });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    if (user) {
      console.log("user Found");

      user.token = null;

      await user.save();

      res.status(200).json({
        statusCode: 200,
        message: "User Has been logged out",
      });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};
