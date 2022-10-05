import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../model/movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent{
  @Input() movie: Movie

  details = false
}
