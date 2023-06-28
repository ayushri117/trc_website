const TeamMember = require("../Model/TeamMember");
const User = require("../Model/User");

exports.getTeam = async (req, res, next) => {
  try {
    const Team = await TeamMember.find();

    console.log("Team Found");

    res.status(200).json({
      statusCode: 200,
      ok: true,
      message: "User Has been logged out",
      team: Team,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.postMember = async (req, res, next) => {
  try {
    const { name, role, imgLink, link1, link2, link3 } = req.body;
    const token = req.headers["auth"];
    console.log(name);
    console.log(role);
    try {
      const user = await User.findOne({ token: token });

      if (!user) {
        res.status(202).json({
          status: 202,
          ok: true,
          error: true,
          message: "Unautharized!",
        });
      }
    } catch (error) {
      console.log(error);
    }

    if (!(name && role)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const member = await TeamMember.findOne({ name: name, role: role });

    console.log(member);

    if (!member) {
      console.log("New Member Found");

      await TeamMember.create({
        name: name,
        role: role,
        image: imgLink,
        link1: link1,
        link2: link2,
        link3: link3,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Member Added",
      });
    } else {
      console.log("Member Already Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Member Already Present",
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

exports.postRemoveMember = async (req, res, next) => {
  try {
    const { name, role } = req.body;
    const token = req.headers["auth"];
    console.log(name);
    console.log(role);
    try {
      const user = await User.findOne({ token: token });

      if (!user) {
        res.status(202).json({
          status: 202,
          ok: true,
          error: true,
          message: "Unautharized!",
        });
      }
    } catch (error) {
      console.log(error);
    }

    if (!(name && role)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const member = await TeamMember.findOne({ name: name, role: role });

    console.log(member);

    if (member) {
      console.log("Member Found");

      await TeamMember.deleteOne({
        name: name,
        role: role,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Member Deleted",
      });
    } else {
      console.log("Member Not Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Member Not Present",
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
