import { Issue } from "../services/GitHubService";
import { format } from "date-fns";

export default class PostModel {
  private constructor(
    public id: number,
    public number: number,
    public title: string,
    public body: string,
    public comments: number,
    public htmlUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static from(issue: Issue): PostModel {
    const createdAt = new Date(issue.created_at);
    const updatedAt = new Date(issue.updated_at);
    const formattedCreatedAt = format(createdAt, "MMM dd, yyyy");
    const formattedUpdatedAt = format(updatedAt, "MMM dd, yyyy");
    return new PostModel(
      issue.id,
      issue.number,
      issue.title,
      issue.body,
      issue.comments,
      issue.html_url,
      formattedCreatedAt,
      formattedUpdatedAt
    );
  }
}
