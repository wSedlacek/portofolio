export interface ActivityDTO {
  id: string;
  headline: string;
  metadata: string;
  story: string;
  date: string;
}

export interface Activity extends ActivityDTO {
  links?: string[];
  videos?: string[];
  images: string[];
  paragraphs: string[];
}
