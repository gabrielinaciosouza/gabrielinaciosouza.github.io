import UserModel from "./UserModel";
import { Comment } from "../services/GitHubService";
import { format } from "date-fns";
import Model from "./Model";

export default class CommentModel extends Model {
  private constructor(
    public id: number,
    public body: string,
    public htmlUrl: string,
    public authorAssociation: string,
    public createdAt: string,
    public updatedAt: string,
    public user: UserModel
  ) {
    super();
  }

  static from(comment: Comment): CommentModel {
    return new CommentModel(
      comment.id,
      comment.body,
      comment.html_url,
      comment.author_association,
      CommentModel.formatDate(comment.created_at),
      CommentModel.formatDate(comment.updated_at),
      UserModel.from(comment.user)
    );
  }
}
