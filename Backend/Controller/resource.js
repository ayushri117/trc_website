const TeamMember = require("../Model/TeamMember");
const User = require("../Model/User");
const Resource = require("../Model/Resource");

exports.getResource = async (req, res, next) => {
  try {
    const resource = await Resource.find();

    console.log("Resource Found");

    res.status(200).json({
      statusCode: 200,
      ok: true,
      message: "Resource Found",
      resource: resource,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.postResource = async (req, res, next) => {
  try {
    const { heading, info, image, link1, link2 } = req.body;
    const token = req.headers["auth"];
    console.log(heading);
    console.log(info);
    try {
      const user = await User.findOne();

      const index = user.token.indexOf(token);
      if (index <= -1) {
        return res.status(202).json({
          status: 202,
          ok: true,
          error: true,
          message: "Unautharized!",
        });
      }
    } catch (error) {
      console.log(error);
    }

    if (!(heading && info)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const resource = await Resource.findOne({ heading: heading, info: info });

    if (!resource) {
      console.log("New resource Found");

      await Resource.create({
        heading: heading,
        info: info,
        image: image,
        link1: link1,
        link2: link2,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Resource Added",
      });
    } else {
      console.log("Resource Already Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Resource Already Present",
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

exports.postRemoveResource = async (req, res, next) => {
  try {
    const { heading, info } = req.body;
    const token = req.headers["auth"];
    console.log(heading + " " + info);
    try {
      const user = await User.findOne();

      const index = user.token.indexOf(token);
      if (index <= -1) {
        return res.status(202).json({
          status: 202,
          ok: true,
          error: true,
          message: "Unautharized!",
        });
      }
    } catch (error) {
      console.log(error);
    }

    if (!(heading && info)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const resource = await Resource.findOne({ heading: heading, info: info });

    if (resource) {
      console.log("Resource Found");

      await Resource.deleteOne({
        heading: heading,
        info: info,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Resource Deleted",
      });
    } else {
      console.log("Resource Not Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Resource Not Present",
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
