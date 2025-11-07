export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// Define the shape of the API response
export interface MoviesApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}