import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = "https://localhost:7225/api/Login/";
  public user = new UserModel;

  constructor(
    private http : HttpClient,
  ) { }

  public signUp(userObj: any) {
    return this.http.post<any>(`${this.baseURL}signup`, userObj);
  }

  public login(loginObj: any) {
    return this.http.post<any>(`${this.baseURL}login`, loginObj);
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public getUserProfile(id: number) {
    return this.http.get<UserModel>(`${this.baseURL}user/${id}`);
  }
}
