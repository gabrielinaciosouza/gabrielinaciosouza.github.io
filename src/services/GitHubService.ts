export type Issue = {
    id: number;
    number: number;
    title: string;
    body: string;
    comments: number;
    html_url: string;
    created_at: string;
    updated_at: string;
  };

  function toQuery(raw: Record<string, unknown>) {
    const params = new URLSearchParams();
  
    Object.keys(raw).forEach((key) => {
      if (raw[key]) params.append(key, String(raw[key]));
    });
  
    return `?${params.toString()}`;
  }

  function hasBody(method: string) {
    return ['POST', 'PUT', 'PATCH'].includes(method);
  }
class GitHubService {
    private apiBase = 'https://api.github.com';
    private async request(method: string, url: string, data?: Record<string, unknown>) {
        let query = '';
        let body = data;
    
        if (data && !hasBody(method)) {
          query = toQuery(data);
          body = undefined;
        }
    
        const response = await fetch([this.apiBase, url, query].join(''), {
          method,
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            Accept: 'application/vnd.github.v3+json',
            // Authorization: `token ${this.token}`,
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
    
        return this.request('GET', `/repos/gabrielinaciosouza/gabrielinaciosouza.github.io/issues`, query);
      }

}

export default new GitHubService();