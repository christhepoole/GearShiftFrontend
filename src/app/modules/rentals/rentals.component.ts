import { Component, OnInit } from '@angular/core';
import { RentalModel } from 'src/app/models/rental.model';
import { AuthService } from 'src/app/services/auth.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {
  public rentalsList: RentalModel[] = [];

  constructor(
    private rentalService: RentalService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.getAllRentals();
  }

  public getAllRentals() {
    this.rentalService.getAllRentals().subscribe({
      next: res => {
        this.rentalsList = res;
        console.log(this.rentalsList);
      },
      error: err => {

      },
      complete: () => {
        this.rentalsList.forEach(rental => {
          rental.renterName = this.auth.users.find(x => x.id == rental.renterId)?.firstname + " " + this.auth.users.find(x => x.id == rental.renterId)?.lastname;
        })
      }
    })
  }
}