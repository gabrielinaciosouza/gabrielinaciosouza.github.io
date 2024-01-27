import { ThreeDots } from "react-loader-spinner";
import PostTile from "../components/PostTile";
import PostModel from "../models/PostModel";
import "../styles/Posts.css";
import { useCallback, useEffect, useState } from "react";
import useHandling from "../hooks/use-handling";
import GitHubService from "../services/GitHubService";
import { Paginate } from "../components/Paginate";

export default function Posts() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchPosts = useCallback(async () => {
    const milestones = await GitHubService.listMilestones();
    const milestone = milestones.find((m) => m.number === 1);

    const offset = Math.round((milestone?.open_issues ?? 0) / 10);

    setTotal(offset === 0 ? 1 : offset);
    const list = (await GitHubService.listIssues(currentPage)).filter(
      (post) => post.milestone.number === 1
    );

    setPosts(list.map(PostModel.from));
  }, [currentPage]);

  const [loadingPosts, loadPosts] = useHandling(fetchPosts);

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
    fetchPosts();
  };

  return (
    <main className="posts-main">
      <h2 className="posts-title">Posts</h2>

      <div>
        {loadingPosts ? (
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

      <Paginate
        pageCount={total}
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        className="posts-pagination"
        previousLabel="<"
        nextLabel=">"
      />
    </main>
  );
}
