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
    const { title, date, auther, previewImage, preview, resource, order } =
      req.body;
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

    if (
      !(title && date && auther && previewImage && preview && order && resource)
    ) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    const check = await Blog.find({
      order: order,
      resourceRef: resource,
    });

    if (check.length !== 0) {
      console.log(check);
      console.log("Blog with same order Present");
      return res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Blog with same order Present",
      });
    }

    const blog = await Blog.findOne({
      title: title,
      date: date,
      auther: auther,
      order: order,
      resourceRef: resource,
    });

    if (!blog) {
      console.log("New blog Found");

      let information = [];

      for (let i in req.body) {
        if (
          i != "title" &&
          i != "date" &&
          i != "auther" &&
          i != "previewImage" &&
          i != "preview" &&
          i != "resource" &&
          i != "order"
        ) {
          if (i.slice(0, -1) == "para") {
            information.push({ para: req.body[i] });
          } else if (i.slice(0, -1) == "subHeading") {
            information.push({ subHeading: req.body[i] });
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
        previewImg: previewImage,
        preview: preview,
        order: order,
        info: information,
        resourceRef: resource,
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

exports.postEditBlog = async (req, res, next) => {
  try {
    const { title, date, auther, previewImage, preview, resource, order } =
      req.body;
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

    if (!(title && date && auther && previewImage && preview && order)) {
      console.log("All Feilds Mandatory");
      res.status(201).json({
        status: 201,
        ok: true,
        error: true,
        message: "All Feilds Mandatory",
      });
    }

    // const check = await Blog.find({
    //   order: order,
    //   resourceRef: resource,
    // });

    // if (check.length === 0) {
    //   return res.status(202).json({
    //     status: 202,
    //     ok: true,
    //     error: true,
    //     message: "Blog with order not Present",
    //   });
    // }

    const blog = await Blog.findOne({
      title: title,
      date: date,
      auther: auther,
      resourceRef: resource,
    });

    if (blog) {
      console.log("Existing blog Found");

      let information = [];

      console.log(req.body);

      for (let i in req.body) {
        if (
          i != "title" &&
          i != "date" &&
          i != "auther" &&
          i != "previewImage" &&
          i != "preview" &&
          i != "resource" &&
          i != "order"
        ) {
          if (i.slice(0, 4) === "para") {
            information.push({ para: req.body[i] });
          } else if (i.slice(0, 4) === "subH") {
            information.push({ subHeading: req.body[i] });
          } else if (i.slice(0, 4) === "imag") {
            information.push({ img: req.body[i] });
          }
        }
      }
      console.log("information!!!");
      console.log(information);

      blog.title = title;
      blog.date = date;
      blog.auther = auther;
      blog.order = order;
      blog.previewImg = previewImage;
      blog.preview = preview;
      blog.info = information;
      blog.resourceRef = resource;

      await blog.save();

      res.status(200).json({
        status: 200,
        ok: true,
        message: "Blog Updated",
      });
    } else {
      console.log("Blog Not Present");
      res.status(202).json({
        status: 202,
        ok: true,
        error: true,
        message: "Blog Not Present",
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
