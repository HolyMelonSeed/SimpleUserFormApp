import { inject, Injectable } from '@angular/core';
import { JokeApiResponse } from '../model/jokeApiResponse';
import { catchError, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  url = "https://api.chucknorris.io/jokes/random";
  http = inject(HttpClient)
  
  getRandomJoke() {
    return this.http.get<JokeApiResponse>(this.url)
    .pipe(catchError((err) => {throw err}))
    .pipe(map(response => response.value))
  }
}
