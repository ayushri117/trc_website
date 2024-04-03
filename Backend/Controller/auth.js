const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      // console.log("All Fields are Mandatory");
      res.status(201).json({
        message: "All Fields Mandatory",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    const decryptPassword = await bcrypt.compare(password, user.password);
    if (decryptPassword === false) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // user.token.push(token);
    // await user.save();
    res.status(200).json({
      email: email,
      token: token,
      expiresIn: "2h",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

exports.register = async (req, res) => {
  const { fullName, email, roll_no } = req.body;

  try{
      const user = await User({
        name: fullName,
        email,
        roll_no,
      });
      await user.save();
      return res.status(201).json({
        message: "User Created Successfully",
      });
  }catch(err){
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
