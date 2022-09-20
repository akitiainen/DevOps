import { Injectable } from '@angular/core';
import {map, Observable, of, pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<any> {
    return of ({ login: email, pw: password});
  }
}
