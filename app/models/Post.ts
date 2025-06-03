import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  content: String,
  image: String,
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", postSchema);
