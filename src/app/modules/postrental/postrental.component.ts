import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-postrental',
  templateUrl: './postrental.component.html',
  styleUrls: ['./postrental.component.scss']
})
export class PostrentalComponent implements OnInit {
  public createRentalForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private router: Router,
    private decimalPipe: DecimalPipe,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.createRentalForm = this.formBuilder.group({
      rentalName: ['', Validators.required],
      rentalType: ['', Validators.required],
      rentalCost: ['', Validators.required],
      maxRentalPeriod: ['', Validators.required],      
      renterId: [null],
    })
  }

  public postRental() {    
    this.createRentalForm.patchValue({
      maxRentalPeriod: parseInt(this.createRentalForm.value.maxRentalPeriod),
      renterId: this.auth.user.id
    })

    if(this.createRentalForm.valid) {
      this.rentalService.createRental(this.createRentalForm.value).subscribe({
        next: res => {
          this.createRentalForm.reset();
          alert(res.message);
          this.router.navigate(['home/rentals']);
        },
        error: err => {

        }
      })
    }
  }

}
