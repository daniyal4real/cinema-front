import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {RegistrationComponent} from './component/registration/registration.component';
import {MovieComponent} from "./component/movie/movie.component";
import {KinoparkComponent} from "./component/kinopark/kinopark.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'movies', component: KinoparkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
