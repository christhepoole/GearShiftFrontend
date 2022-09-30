import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street_address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  public onSignup() {

    if(this.registerForm.valid) {
      this.auth.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          alert(res.message);
          this.registerForm.reset();
          this.router.navigate(['']);
        },
        error: (err) => {
          alert(err.error.message);
        }
      })
    } else {
      
    }
  }

}
