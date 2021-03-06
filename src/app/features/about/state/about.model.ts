export interface AboutDTO {
  headline: string;
  metadata: string;
  story: string;
  updated: string;
}

export interface About extends AboutDTO {
  skills: string[];
  paragraphs: string[];
}
