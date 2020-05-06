export interface ProjectDTO {
  id: number;
  description: string;
  name: string;
  name_with_namespace: string;
  path: string;
  path_with_namespace: string;
  created_at: string;
  default_branch: string | null;
  tag_list: string[];
  ssh_url_to_repo: string;
  http_url_to_repo: string;
  web_url: string;
  readme_url: null | string;
  avatar_url: null | string;
  star_count: number;
  forks_count: number;
  last_activity_at: string;
  namespace: Namespace;
  _links: Links;
  empty_repo: boolean;
  archived: boolean;
  visibility: Visibility;
  owner: Owner;
  resolve_outdated_diff_discussions: boolean;
  container_registry_enabled: boolean;
  container_expiration_policy?: ContainerExpirationPolicy;
  issues_enabled: boolean;
  merge_requests_enabled: boolean;
  wiki_enabled: boolean;
  jobs_enabled: boolean;
  snippets_enabled: boolean;
  can_create_merge_request_in: boolean;
  issues_access_level: AutoCancelPendingPipelines;
  repository_access_level: AutoCancelPendingPipelines;
  merge_requests_access_level: AutoCancelPendingPipelines;
  forking_access_level: AutoCancelPendingPipelines;
  wiki_access_level: AutoCancelPendingPipelines;
  builds_access_level: AutoCancelPendingPipelines;
  snippets_access_level: AutoCancelPendingPipelines;
  pages_access_level: AutoCancelPendingPipelines;
  emails_disabled: boolean | null;
  shared_runners_enabled: boolean;
  lfs_enabled: boolean;
  creator_id: number;
  import_status: ImportStatus;
  open_issues_count: number;
  ci_default_git_depth: number;
  public_jobs: boolean;
  build_timeout: number;
  auto_cancel_pending_pipelines: AutoCancelPendingPipelines;
  build_coverage_regex: string;
  ci_config_path: string;
  shared_with_groups: any[];
  only_allow_merge_if_pipeline_succeeds: boolean;
  request_access_enabled: boolean;
  only_allow_merge_if_all_discussions_are_resolved: boolean;
  remove_source_branch_after_merge: boolean | null;
  printing_merge_request_link_enabled: boolean;
  merge_method: MergeMethod;
  suggestion_commit_message: string;
  auto_devops_enabled: boolean;
  auto_devops_deploy_strategy: AutoDevopsDeployStrategy;
  autoclose_referenced_issues: boolean;
  approvals_before_merge?: number;
  mirror?: boolean;
  external_authorization_classification_label: string;
  packages_enabled?: boolean;
  service_desk_enabled?: boolean;
  service_desk_address?: string;
  marked_for_deletion_at?: string;
  marked_for_deletion_on?: string;
  permissions: Permissions;
  mirror_user_id?: number;
  mirror_trigger_builds?: boolean;
  only_mirror_protected_branches?: boolean | null;
  mirror_overwrites_diverged_branches?: boolean | null;
}

export interface Links {
  self: string;
  issues: string;
  merge_requests: string;
  repo_branches: string;
  labels: string;
  events: string;
  members: string;
}

export enum AutoCancelPendingPipelines {
  Enabled = 'enabled',
  Private = 'private',
}

export enum AutoDevopsDeployStrategy {
  Continuous = 'continuous',
}

export interface ContainerExpirationPolicy {
  cadence: string;
  enabled: boolean;
  keep_n: string;
  older_than: string;
  name_regex: string;
  name_regex_keep: string;
  next_run_at: string;
}

export enum ImportStatus {
  Failed = 'failed',
  Finished = 'finished',
  None = 'none',
}

export enum MergeMethod {
  Merge = 'merge',
}

export interface Namespace {
  id: number;
  name: string;
  path: string;
  kind: Kind;
  full_path: string;
  parent_id?: number;
  avatar_url: string;
  web_url: string;
}

export enum Kind {
  User = 'user',
}

export interface Owner {
  id: number;
  name: string;
  username: string;
  state: State;
  avatar_url: string;
  web_url: string;
}

export enum State {
  Active = 'active',
}

export interface Permissions {
  project_access: ProjectAccess;
  group_access?: string;
}

export interface ProjectAccess {
  access_level: number;
  notification_level: number;
}

export enum Visibility {
  Private = 'private',
  Public = 'public',
}

export interface Project extends ProjectDTO {
  stack?: string[];
  members?: string[];
  link?: string;
}
