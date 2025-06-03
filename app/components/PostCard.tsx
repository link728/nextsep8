import { FC } from 'react';

const PostCard: FC<{ post: any }> = ({ post }) => (
  <div className="border p-4 rounded mb-4">
    <h4>{post.userId.name}</h4>
    <p>{post.content}</p>
    {post.image && <img src={post.image} alt="" />}
  </div>
);

export default PostCard;
