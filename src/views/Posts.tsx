import { ThreeDots } from "react-loader-spinner";
import PostTile from "../components/PostTile";
import Post from "../models/Post";
import "../styles/Posts.css";
import { useCallback, useEffect, useState } from "react";
import useHandling from "../hooks/use-handling";
import GitHubService from "../services/GitHubService";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const page = 1;

  const [loadingArticles, loadPosts] = useHandling(
    useCallback(async () => {
      const list = await GitHubService.listIssues(page);

      setPosts(list.map(Post.from));
    }, [page])
  );

  useEffect(() => {
    loadPosts();
  }, [page]);

  return (
    <main className="posts-main">
      <h2 className="posts-title">Posts</h2>

      <div>
        {loadingArticles ? (
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
          posts.map((post) => <PostTile post={post} />)
        )}
      </div>
    </main>
  );
}
