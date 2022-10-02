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
  public textType: string = "password";
  public showPass: boolean = false;
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

  public hideShowPassword() {
    this.showPass = !this.showPass;
    this.showPass ? document.getElementById('eyeicon')!.innerText = "visibility" : document.getElementById('eyeicon')!.innerText = "visibility_off";
    this.showPass ? this.textType = "text" : this.textType = "password";
  }

  public onSignup() {
    if(this.registerForm.valid) {
      this.auth.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          this.registerForm.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err.error.message);
        }
      })
    } else {
      
    }
  }

}
