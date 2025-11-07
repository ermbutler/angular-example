import { Component } from '@angular/core';
import { Movie, MoviesApiResponse } from '../../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  
})
export class Home {
  myMovies: Movie[] = [];
  myMoviesOG: Movie[] = [];
  skills: string[] = [];
  activeSkills: string[] = [];
  searchTerm: string = 'Aliens';

  resetFilter() {
    this.myMovies = [...this.myMoviesOG];
  }

  filterDisplayOnSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();
    this.myMovies = this.myMoviesOG.filter(movie => movie.Title.toLowerCase().includes(searchTerm));
   
  }


  searchResponse: MoviesApiResponse = {
    "Search": [],
    "totalResults": "0",
    "Response": "False"
  };

  ngOnInit() {
   this.searchResponse = {
    "Search": [
    {
      "Title": "Aliens",
      "Year": "1986",
      "imdbID": "tt0090605",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjIyNGJhYzYtN2I1My00OTVhLWEyMzItZTVjNDMzOTVkYWViXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Cowboys & Aliens",
      "Year": "2011",
      "imdbID": "tt0409847",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1MzkyNzQ3OV5BMl5BanBnXkFtZTcwMDk1NTg2NQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Monsters vs. Aliens",
      "Year": "2009",
      "imdbID": "tt0892782",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMzMzMg@@._V1_SX300.jpg"
    },
    {
      "Title": "Aliens vs. Predator: Requiem",
      "Year": "2007",
      "imdbID": "tt0758730",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5NDY2NDUwM15BMl5BanBnXkFtZTYwNzQxMTA3._V1_SX300.jpg"
    },
    {
      "Title": "Aliens in the Attic",
      "Year": "2009",
      "imdbID": "tt0775552",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3NTMzNTIxNV5BMl5BanBnXkFtZTcwOTI4ODU1Mg@@._V1_SX300.jpg"
    },
    {
      "Title": "Evil Aliens",
      "Year": "2005",
      "imdbID": "tt0383353",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjYxZGQ3N2MtYTZlZi00Zjk3LWI5YTAtOGJjMDJiOThmYTExXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Aliens of the Deep",
      "Year": "2005",
      "imdbID": "tt0417415",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NjU2ODA1M15BMl5BanBnXkFtZTcwNzI0NDcyMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Monsters vs Aliens: Mutant Pumpkins from Outer Space",
      "Year": "2009",
      "imdbID": "tt1482967",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjI3MmM5MWEtYWY2NC00YjIzLWE3MmItYTg0NDJiZjQ3NDE4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Luis and the Aliens",
      "Year": "2018",
      "imdbID": "tt4410000",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTIxYTFhOGMtZTE4ZS00OGNjLWEyZmEtZjlkNTUzZjk5NDhjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Ben 10: Destroy All Aliens",
      "Year": "2012",
      "imdbID": "tt2290147",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkzNTY1NzI0OF5BMl5BanBnXkFtZTgwNTEzMTM2NzE@._V1_SX300.jpg"
    }
  ],
  "totalResults": "375",
  "Response": "True"
  };



    this.myMoviesOG = [ ...this.searchResponse.Search  ];

   this.myMovies = [...this.myMoviesOG];
  }
}
