export interface AboutDTO {
  headline: string;
  metadata: string;
  story: string;
}

export interface About extends AboutDTO {
  skills: string[];
}
