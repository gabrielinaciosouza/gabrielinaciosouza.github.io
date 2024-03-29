export type Issue = {
  id: number;
  number: number;
  title: string;
  body: string;
  comments: number;
  html_url: string;
  milestone: Milestone;
  created_at: string;
  updated_at: string;
};

export type Milestone = {
  id: number;
  number: number;
  title: string;
  description: string;
  open_issues: number;
};

export type User = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Comment = {
  id: number;
  body: string;
  html_url: string;
  author_association: string;
  created_at: string;
  updated_at: string;
  user: User;
};

function toQuery(raw: Record<string, unknown>) {
  const params = new URLSearchParams();

  Object.keys(raw).forEach((key) => {
    if (raw[key]) params.append(key, String(raw[key]));
  });

  return `?${params.toString()}`;
}

function hasBody(method: string) {
  return ["POST", "PUT", "PATCH"].includes(method);
}

const repoProject = "gabrielinaciosouza/gabrielinaciosouza.github.io";

class GitHubService {
  private apiBase = "https://api.github.com";
  private async request(
    method: string,
    url: string,
    data?: Record<string, unknown>
  ) {
    let query = "";
    let body = data;

    if (data && !hasBody(method)) {
      query = toQuery(data);
      body = undefined;
    }

    const response = await fetch([this.apiBase, url, query].join(""), {
      method,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/vnd.github.v3+json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    return response.json();
  }

  public async listIssues(page: number): Promise<Issue[]> {
    const query = {
      page,
      per_page: 10,
    };

    return this.request("GET", `/repos/${repoProject}/issues`, query);
  }

  public async listMilestones(): Promise<Milestone[]> {
    const query = {
      page: 1,
      per_page: 10,
    };

    return this.request("GET", `/repos/${repoProject}/milestones`, query);
  }

  public getIssue(issue: number): Promise<Issue> {
    return this.request("GET", `/repos/${repoProject}/issues/${issue}`);
  }

  public listComments(issue: number, page: number): Promise<Comment[]> {
    const query = { page, per_page: 10 };

    return this.request(
      "GET",
      `/repos/${repoProject}/issues/${issue}/comments`,
      query
    );
  }
}

export default new GitHubService();
