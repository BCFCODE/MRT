interface Genre {
  _id: string;
  name: string;
}

interface Movie {
  _id: string;
  title: string;
  genre: Genre;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: string;
  liked?: boolean;
}

interface PageQuery {
  current: number;
  pageSize: number;
}

export type { Genre, Movie, PageQuery };