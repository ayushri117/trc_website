const Blog = require('../Model/Blog');

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
}


exports.getBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  }catch (e) {
    res.status(404).json({ message: e.message });
  }
}