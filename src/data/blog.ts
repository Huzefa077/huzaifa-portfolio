export interface BlogItem {
  title: string;
  url: string;
  date: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

// External articles can be added here when Huzaifa publishes them.
const data: BlogItem[] = [];

export default data;
