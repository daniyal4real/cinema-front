import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../model/movie";
import {MoviesService} from "../../service/movies.service";

@Component({
  selector: 'app-kinopark',
  templateUrl: './kinopark.component.html',
  styleUrls: ['./kinopark.component.scss']
})
export class KinoparkComponent implements OnInit {

  term = ''
  movies$!: Observable<Movie[]>

  constructor(private moviesService: MoviesService) {
  }


  ngOnInit(): void {
    this.movies$ = this.moviesService.getAll()
    console.log(this.movies$)
  }
}
