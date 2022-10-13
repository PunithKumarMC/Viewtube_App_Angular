import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterData } from '../models/register-data';

@Injectable({
  providedIn: 'root'
})
export class NoteaddService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/loginData";

  public addReg(model: RegisterData): Observable<RegisterData> {
    const headers = { 'content-Type': 'application/json' }
    const Stringify = JSON.stringify(model);
    console.log('String', Stringify);
    return this.http.post<RegisterData>(this.url, Stringify, { 'headers': headers })
  }

  get(): Observable<Array<RegisterData>> {
    return this.http.get<Array<RegisterData>>(this.url)
  }
}
