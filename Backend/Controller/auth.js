const User = require("../Model/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    if (!(email && password)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
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
        status: 200,
        ok: true,
        message: "User Logged In",
        email: email,
        token: token,
        expiresIn: "2h",
      });
    } else {
      console.log("User not found!");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "User not found!",
      });
    }
  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.logout = async (req, res, next) => {
  try {
    const user = await User.findOne();

    if (user) {
      console.log("user Found for logout");

      user.token = null;

      await user.save();

      res.status(200).json({
        statusCode: 200,
        ok: true,
        message: "User Has been logged out",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};
