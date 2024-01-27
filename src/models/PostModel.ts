import { Issue } from "../services/GitHubService";
import Model from "./Model";

export default class PostModel extends Model {
  private constructor(
    public id: number,
    public number: number,
    public title: string,
    public body: string,
    public comments: number,
    public htmlUrl: string,
    public createdAt: string,
    public updatedAt: string
  ) {
    super();
  }

  static from(issue: Issue): PostModel {
    return new PostModel(
      issue.id,
      issue.number,
      issue.title,
      issue.body,
      issue.comments,
      issue.html_url,
      PostModel.formatDate(issue.created_at),
      PostModel.formatDate(issue.updated_at)
    );
  }
}
