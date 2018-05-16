import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {  
  private username: string = 'Bluesman66';
  private client_id = 'd19371d3a2826f290cae';
  private client_secret = 'c91d2f649a0917ef750fcfba374bc1db0ad609f7';

  constructor(private http: Http) {
    console.log('Github Service Ready...');
  }

  getUser() {
    const query = `http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
    return this.http.get(query).pipe(map(res => res.json()));      
  }
}
