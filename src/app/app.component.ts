import {Component, OnInit} from '@angular/core';
import {Movie} from "./model/movie";
import {MoviesService} from "./service/movies.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'cinema-front';

  // movies: Movie[] = []

  constructor() {
  }


  ngOnInit(): void {
  }
}
