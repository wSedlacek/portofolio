export interface ProfileDTO {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
  created_at: string;
  bio: string;
  location: string;
  public_email: string;
  skype: string;
  linkedin: string;
  twitter: string;
  website_url: string;
  organization: string;
  job_title: string;
}

export interface Profile extends ProfileDTO {
  tagline?: string;
  availability?: string;
  github?: string;
  resume?: string;
  experience?: Date;
}
