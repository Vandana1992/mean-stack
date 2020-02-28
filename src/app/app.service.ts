import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {

  }

  getUserInfo() {
    //return this.http.get("http://localhost:3000/");
    return of("hello");
  }


}
