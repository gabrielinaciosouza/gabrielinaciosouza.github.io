import Markdown from "react-markdown";
import CommentModel from "../models/CommentModel";
import "../styles/CommentTile.css";

export type CommentTileProps = {
  comment: CommentModel;
};

export default function CommentTile(props: CommentTileProps) {
  const { comment } = props;

  return (
    <div className="comment-tile-wrapper">
      <div className="comment-tile-avatar">
        <img src={comment.user.avatarUrl} alt="Avatar" />
      </div>
      <div className="comment-tile-header">
        <a href={comment.user.htmlUrl} className="comment-tile-author">
          {comment.user.login}
        </a>
        <a className="comment-tile-author">{comment.createdAt}</a>
      </div>
      <Markdown className="post-container">{comment?.body}</Markdown>
    </div>
  );
}
