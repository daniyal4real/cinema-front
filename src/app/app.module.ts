import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavComponent } from './component/nav/nav.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MovieComponent } from './component/movie/movie.component';
import { GlobalErrorComponent } from './component/global-error/global-error.component';
import { FilterMoviesPipe } from './pipe/filter-movies.pipe';
import { KinoparkComponent } from './component/kinopark/kinopark.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NavComponent,
    MovieComponent,
    GlobalErrorComponent,
    FilterMoviesPipe,
    KinoparkComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
