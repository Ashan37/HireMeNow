import Comment from '../models/Comment.js';

export const createComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const newComment = new Comment({ name, comment, image: imagePath });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
