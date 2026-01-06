import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private _http: HttpClient) {}
  base_url: string = "https://jsonplaceholder.typicode.com/users";
  getData() {
    return this._http.get<any[]>(this.base_url);
  }
}
