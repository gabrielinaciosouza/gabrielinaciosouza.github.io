import { ThreeDots } from "react-loader-spinner";
import PostTile from "../components/PostTile";
import Post from "../models/Post";
import "../styles/Posts.css";
import { useCallback, useEffect, useState } from "react";
import useHandling from "../hooks/use-handling";
import GitHubService from "../services/GitHubService";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
    color: blue;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
    color: grey;
  }
`;

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchPosts = useCallback(async () => {
    const milestones = await GitHubService.listMilestones();
    const milestone = milestones.find((m) => m.number === 1);

    const offset = Math.round((milestone?.open_issues ?? 0) / 10);
    console.log(offset);
    setTotal(offset === 0 ? 1 : offset);
    const list = (await GitHubService.listIssues(currentPage)).filter(
      (post) => post.milestone.number === 1
    );

    setPosts(list.map(Post.from));
  }, [currentPage]);

  const [loadingArticles, loadPosts] = useHandling(fetchPosts);

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

      <MyPaginate
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
