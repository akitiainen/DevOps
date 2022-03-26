import { Injectable } from '@angular/core';
import {map, Observable, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<any> {
    console.log(email, password)
    return new Observable<any>();
  }
}
