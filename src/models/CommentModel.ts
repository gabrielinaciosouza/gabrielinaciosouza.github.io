import UserModel from "./UserModel";
import { Comment } from "../services/GitHubService";
import { format } from "date-fns";

export default class CommentModel {
  private constructor(
    public id: number,
    public body: string,
    public htmlUrl: string,
    public authorAssociation: string,
    public createdAt: string,
    public updatedAt: string,
    public user: UserModel
  ) {}

  static from(comment: Comment): CommentModel {
    const createdAt = new Date(comment.created_at);
    const updatedAt = new Date(comment.updated_at);
    const formattedCreatedAt = format(createdAt, "MMM dd, yyyy");
    const formattedUpdatedAt = format(updatedAt, "MMM dd, yyyy");
    return new CommentModel(
      comment.id,
      comment.body,
      comment.html_url,
      comment.author_association,
      formattedCreatedAt,
      formattedUpdatedAt,
      UserModel.from(comment.user)
    );
  }
}
