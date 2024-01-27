import { User } from "../services/GitHubService";

export default class UserModel {
  private constructor(
    public id: number,
    public login: string,
    public avatarUrl: string,
    public htmlUrl: string
  ) {}

  static from(user: User): UserModel {
    return new UserModel(user.id, user.login, user.avatar_url, user.html_url);
  }
}
