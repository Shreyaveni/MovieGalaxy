import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthReviewService {

  // private apiUrl = '/api/reviews';

  constructor(private http: HttpClient, private router: Router) { }

  login(uname: string, pword: string): Observable<number> {
    if (uname === 'Shreya' && pword === '1234') {
      return of(200); 
    } else {
      return of(403); 
    }
  }

  logout(): void {
    this.router.navigate(['login']);
  }

  // addReview(reviewData: any): Observable<any> {
  //   return this.http.post(this.apiUrl, reviewData).pipe(
  //     catchError(this.handleError<any>('addReview'))
  //   );
  // }

  // getReviews(): Observable<any> {
  //   return this.http.get(this.apiUrl).pipe(
  //     catchError(this.handleError<any>('getReviews'))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(`${operation} failed: ${error.message}`);
  //     return of(result as T);
  //   };
  // }
}
