import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, Observable, retry, tap, throwError} from 'rxjs'
import {Movie} from '../model/movie'
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService) {

  }


  getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:8000/api/kinopark/films', {
      params: new HttpParams({
      })
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
