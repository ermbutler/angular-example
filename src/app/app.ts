import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Home } from './movie-search/home/home';
import { MovieCard } from './movie-search/movie-card/movie-card';
import { MovieDetails } from './movie-search/movie-details/movie-details';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Home, MovieCard, MovieDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  title: string = 'Movie Search Application';
  year: number = new Date().getFullYear();
}
