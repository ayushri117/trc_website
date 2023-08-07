const Gallery = require("../Model/Gallery");
const User = require("../Model/User");

exports.getGallery = async (req, res, next) => {
  try {
    const gallery = await Gallery.find();

    console.log("Gallery Found");

    res.status(200).json({
      statusCode: 200,
      ok: true,
      message: "Gallery Found",
      gallery: gallery,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.postGallery = async (req, res, next) => {
  try {
    const { image } = req.body;
    const token = req.headers["auth"];
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
    if (!image) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }
    const gallery = await Gallery.findOne({ image: image });
    // console.log(member);
    if (!gallery) {
      console.log("New Gallery Found");
      await Gallery.create({
        image: image,
      });
      res.status(200).json({
        status: 200,
        ok: true,
        message: "Gallery Added",
      });
    } else {
      console.log("Gallery Already Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Gallery Already Present",
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

exports.postRemoveGallery = async (req, res, next) => {
  const { id } = req.body;
  try {
    const token = req.headers["auth"];
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

    if (!id) {
      console.log("no id found");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "no id found",
      });
    }

    const gallery = await Gallery.findOne({ _id: id });

    if (gallery) {
      console.log("Gallery Found for Remove");

      await Gallery.deleteOne({
        _id: id,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Gallery Deleted",
      });
    } else {
      console.log("Gallery Not Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Gallery Not Present",
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
