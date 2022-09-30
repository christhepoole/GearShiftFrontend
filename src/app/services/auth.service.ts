import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = "https://localhost:7225/api/Login/";
  private authChangeSubject = new Subject<boolean>();
  public authChanged = this.authChangeSubject.asObservable();

  constructor(
    private http : HttpClient,
  ) { }

  public signUp(userObj: any) {
    return this.http.post<any>(`${this.baseURL}signup`, userObj);
  }

  public login(loginObj: any) {
    return this.http.post<any>(`${this.baseURL}login`, loginObj);
  }

  public sendAuthChangeNotification(isAuthenticated: boolean) {
    this.authChangeSubject.next(isAuthenticated);
  }
}
