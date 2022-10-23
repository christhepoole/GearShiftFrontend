import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private baseURL: string = "https://localhost:7225/api/Rental/";

  constructor(
    private http: HttpClient,
  ) { }

  public createRental(rentalObj: any) {
    return this.http.post<any>(`${this.baseURL}createrental`, rentalObj);
  }

  public getAllRentals() {
    return this.http.get<any>(`${this.baseURL}allrentals`);
  }

  public getRentalById(id: number) {
    return this.http.get<any>(`${this.baseURL}rentalbyid/${id}`);
  }
}
