const TeamMember = require("../Model/TeamMember");
const User = require("../Model/User");
const Resource = require("../Model/Resource");
const Blog = require("../Model/Blog");

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    console.log("Blogs Found");

    res.status(200).json({
      statusCode: 200,
      ok: true,
      message: "Blogs Found",
      blog: blogs,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.getBlog = async (req, res, next) => {
  const { id } = req.body;
  try {
    const blog = await Blog.find({ _id: id });

    console.log("Blog Found");

    res.status(200).json({
      statusCode: 200,
      ok: true,
      message: "Blog Found",
      blog: blog,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      ok: false,
      message: "Server Error",
    });
  }
};

exports.postBlog = async (req, res, next) => {
  try {
    const { title, date, auther } = req.body;
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

    if (!(title && date && auther)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const blog = await Blog.findOne({
      title: title,
      date: date,
      auther: auther,
    });

    if (!blog) {
      console.log("New blog Found");

      let information = [];

      for (let i in req.body) {
        if (i != "title" && i != "date" && i != "auther") {
          if (i.slice(0, -1) == "para") {
            information.push({ para: req.body[i] });
          } else {
            information.push({ img: req.body[i] });
          }
        }
      }

      console.log(information);

      await Blog.create({
        title: title,
        date: date,
        auther: auther,
        info: information,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Blog Added",
      });
    } else {
      console.log("Blog Already Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Blog Already Present",
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

exports.postRemoveBlog = async (req, res, next) => {
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

    const blog = await Blog.findOne({ _id: id });

    if (blog) {
      console.log("blog Found");

      await Blog.deleteOne({
        _id: id,
      });

      res.status(200).json({
        status: 200,
        ok: true,
        message: "blog Deleted",
      });
    } else {
      console.log("blog Not Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "blog Not Present",
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
