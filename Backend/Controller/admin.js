const Blog = require("../Model/Blog");
const User = require("../Model/User");

exports.addBlog = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.user_id });

    if (!user) {
      return res.status(404).json({
        message: "Not Authenticated!",
      });
    }
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res.status(401).json({
        message: "Incomplete Information",
      });
    }

    let date = new Date();

    await Blog.create({
      title,
      description,
      previewImg: image,
      date,
      author: user.name,
    });

    return res.status(200).json({
      message: "Blog Created",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.messsage,
    });
  }
};

exports.editBlog = async (req, res) => {
  const user = User.findById(req.user.user_id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const { id } = req.params;
  const { content } = req.body;
  const updatedBlog = { content };
  await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
  return res.status(200).json(updatedBlog);
};
exports.previewEdit = async (req, res) => {
  const user = User.findById(req.user.user_id);
  if (!user) {
    return res.status(401).json({ message: "Not authorized" });
  }
  const { id } = req.params;
  const { title, heading, description, previewImg } = req.body;
  const updatedBlog = { title, heading, description, previewImg };
  await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
  return res.status(200).json(updatedBlog);
};
