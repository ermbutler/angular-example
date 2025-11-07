export interface Movie {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  genre: string;
}

// Define the shape of the API response
export interface MoviesApiResponse {
  Response: string;
  Search: Movie[]; // The list of movies is typically under a 'Search' key
  totalResults: string;
}