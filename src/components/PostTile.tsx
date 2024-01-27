import { Link } from "react-router-dom";
import "../styles/PostTile.css";
import PostModel from "../models/PostModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

export type PostTileProps = {
  post: PostModel;
};

export default function PostTile(props: PostTileProps) {
  return (
    <Link to={"/posts/" + props.post.number}>
      <div className="post-tile-wrapper">
        <div className="post-tile-row">
          <div className="post-tile-left">{props.post.createdAt}</div>
          <div className="post-tile-right">{props.post.title}</div>
        </div>
        <div className="post-tile-row">
          <div className="post-tile-left">
            <FontAwesomeIcon icon={faComment} className="post-tile-icon" />
            {props.post.comments}
          </div>
        </div>
      </div>
    </Link>
  );
}
