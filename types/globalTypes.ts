export interface BlogPostDataProps {
  id: string | number;
  title: string;
  details: string;
  date: string;
  shortDescription: string;
  readTime: string;
  tags: string[];
}

export interface ProjectDataTypes {
  id: string | number;
  title: string;
  description: string;
  duration: string;
  impact: string[];
  tags: string[];
  liveURL: string;
}
