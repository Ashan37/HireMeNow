import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  image: String,
}, { timestamps: true });

export default mongoose.model('Comment', CommentSchema);
