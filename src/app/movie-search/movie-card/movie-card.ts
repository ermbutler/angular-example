import { Component, Input } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
  
})
export class MovieCard {
  @Input() movie!: Movie;
}
