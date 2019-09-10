export interface Project {
  avatar_url: string;
  created_at: string;
  default_branch: string;
  description: string;
  forks_count: number;
  http_url_to_repo: string;
  id: number;
  last_activity_at: string;
  name: string;
  name_with_namespace: string;
  namespace: {
    avatar_url: string;
    full_path: string;
    id: number;
    kind: string;
    name: string;
    parent_id: null;
    path: string;
    web_url: string;
  };
  path: string;
  path_with_namespace: string;
  readme_url: null;
  ssh_url_to_repo: string;
  star_count: number;
  tag_list: Array<string>;
  web_url: string;
}
