import { Component } from '@angular/core';
import { Movie, MoviesApiResponse } from '../../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';
import { MoviesService } from '../../services/movies';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [CommonModule, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  
})
export class Home {
  constructor(private moviesService: MoviesService) { } // Inject the service
  savedMovieResponses: any = {};

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
   this.getMovies();
  }

  debounceUpdateSearchTerm(newTerm: string) {
    clearTimeout((this as any).debounceTimer);
    (this as any).debounceTimer = setTimeout(() => {
      this.updateSearchTerm(newTerm);
    }, 300); // Adjust the delay as needed
  }

  updateSearchTerm(newTerm: string) {
    this.searchTerm = newTerm;

    if(newTerm === ""){
      this.myMoviesOG = [];
      this.myMovies = [];
    } else {
      this.getMovies();
    }
    
  }

  async getMovies(){
    if(this.savedMovieResponses[`${this.searchTerm}`]){
    
      this.searchResponse = this.savedMovieResponses[`${this.searchTerm}`];
      console.log("Using cached response for term:", this.searchTerm, this.searchResponse);
      if(this.searchResponse.Search){
        this.myMoviesOG = [ ...this.searchResponse.Search  ];
        this.myMovies = [...this.myMoviesOG];
      } else {
        this.myMoviesOG = [];
        this.myMovies = [];
      }
      return;
    }
    // Otherwise, fetch from API
    const searchResponse = this.moviesService.getMoviesBySearchTerm(this.searchTerm) as any;
    console.log('searchResponse:', searchResponse);
    searchResponse.subscribe((response: MoviesApiResponse) => {
      this.searchResponse = response;
      console.log('searchResponse inside subscribe:', this.searchResponse);
      
      if(this.searchResponse.Search){
        this.savedMovieResponses[`${this.searchTerm}`] = this.searchResponse;
        this.myMoviesOG = [ ...this.searchResponse.Search  ];
        this.myMovies = [...this.myMoviesOG];
      } else {
        this.myMoviesOG = [];
        this.myMovies = [];
      }
    });
  }
}
