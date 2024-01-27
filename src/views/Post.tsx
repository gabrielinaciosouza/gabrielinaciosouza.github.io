import { useParams } from "react-router-dom";
import "../styles/Post.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import PostModel from "../models/PostModel";
import useHandling from "../hooks/use-handling";
import GitHubService from "../services/GitHubService";
import { ThreeDots } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Markdown from "react-markdown";
import CommentModel from "../models/CommentModel";
import CommentTile from "../components/CommentTile";
import { Paginate } from "../components/Paginate";

function usePost() {
  const { id } = useParams();
  const [post, setPost] = useState<PostModel>();

  const [loading, load] = useHandling(
    useCallback(async () => {
      const result = await GitHubService.getIssue(parseInt(id!, 10));

      setPost(PostModel.from(result));
    }, [id]),
    true
  );

  useEffect(() => {
    load();
  }, [id]);

  return [loading, post] as const;
}

export default function Post() {
  const { id } = useParams();
  const [comments, setComments] = useState<CommentModel[]>([]);
  const idNumber = parseInt(id!, 10);
  const [commentCurrentPage, setcommentCurrentPage] = useState<number>(1);
  const [loadingPost, post] = usePost();
  const [commentTotal, setCommentTotal] = useState<number>(0);
  const newCommentUrl = useMemo(() => {
    return post ? `${post.htmlUrl}#new_comment_field` : "";
  }, [post]);

  const fetchComments = useCallback(async () => {
    const result = await GitHubService.listComments(
      idNumber,
      commentCurrentPage
    );
    const offset = Math.round((post?.comments ?? 0) / 10);
    setCommentTotal(offset === 0 ? 1 : offset);

    const list = (await GitHubService.listIssues(commentCurrentPage)).filter(
      (post) => post.milestone.number === 1
    );
    setComments(result.map(CommentModel.from));
  }, [idNumber, commentCurrentPage]);

  const handlePageClick = (event: { selected: number }) => {
    setcommentCurrentPage(event.selected + 1);
    fetchComments();
  };

  const [loadingComments, load] = useHandling(fetchComments, true);

  useEffect(() => {
    load();
  }, [idNumber, commentCurrentPage]);
  return (
    <article className="post-wrapper">
      <div>
        {loadingPost ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3b82f6"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="posts-loading"
          />
        ) : (
          <>
            <div className="post-title">{post?.title}</div>
            <div className="post-into">
              <span>{post?.createdAt}</span>

              <span className="post-center">
                <FontAwesomeIcon icon={faComment} className="post-tile-icon" />

                <span className="post-comments">{post?.comments}</span>
              </span>
            </div>
            <Markdown className="post-container">{post?.body}</Markdown>
          </>
        )}
        {loadingComments && !loadingPost ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#3b82f6"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="posts-loading"
          />
        ) : (
          <>
            <div className="post-comments-title">Comments</div>
            <a
              href={newCommentUrl}
              target="_blank"
              className="post-comment-button"
            >
              Click to comment
            </a>
            {comments.map((comment) => (
              <CommentTile comment={comment} />
            ))}

            {post?.comments !== 0 ? (
              <Paginate
                pageCount={commentTotal}
                onPageChange={handlePageClick}
                forcePage={commentCurrentPage - 1}
                className="posts-pagination"
                previousLabel="<"
                nextLabel=">"
              />
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </article>
  );
}
