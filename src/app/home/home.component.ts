import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from "../app.component";
import { StartRatingComponent } from '../feature/start-rating/start-rating.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,AppComponent, HeaderComponent,NgbRatingModule, StartRatingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  
  trendingMovies: any[] = [];
  theatreMovies: any[] = [];
  popularMovies: any[] = [];
  viewAllTheatreMovies = false;
  viewAllTrendingMovies = false;
  viewAllPopularMovies = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void{
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }
  getTrendingMovies() {
    this.http.get<any[]>('assets/data/trending-movies.json').subscribe({
      next: (movies) => {
        this.trendingMovies = movies;
        // console.log(this.trendingMovies);
      },
      error: (err) => console.error('Error:', err)
    });
  }

  getTheatreMovies() {
    this.http.get<any[]>('assets/data/theatre-movies.json').subscribe({
      next: (movies) => {
        this.theatreMovies = movies;
        // console.log(this.theatreMovies);
      },
      error: (err) => console.error('Error:', err)
    });
  }

  getPopularMovies() {
    this.http.get<any[]>('assets/data/popular-movies.json').subscribe({
      next: (movies) => {
        this.popularMovies = movies;
        // console.log(this.popularMovies);
      },
      error: (err) => console.error('Error:', err)
    });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

  get displayedTrendingMovies() {
    return this.viewAllTrendingMovies ? this.trendingMovies : this.theatreMovies.slice(0, 8); 
  }
  get displayedTheatreMovies() {
    return this.viewAllTheatreMovies ? this.theatreMovies : this.theatreMovies.slice(0, 8); 
  }

  get displayedPopularMovies() {
    return this.viewAllPopularMovies ? this.popularMovies : this.popularMovies.slice(0, 10);
  }
  
  toggleViewAll(section: string) {
    if (section === 'theatre') {
      this.viewAllTheatreMovies = !this.viewAllTheatreMovies;
    } else if (section === 'trending') {
      this.viewAllTrendingMovies = !this.viewAllTrendingMovies;
    } else if (section === 'popular') {
      this.viewAllPopularMovies = !this.viewAllPopularMovies;
    }
  } 
}
