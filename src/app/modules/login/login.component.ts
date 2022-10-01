import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseModel } from 'src/app/models/authresponse.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public textType: string = "password";
  public showPass: boolean = false;
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public hideShowPassword() {
    this.showPass = !this.showPass;
    this.showPass ? document.getElementById('eyeicon')!.innerText = "visibility" : document.getElementById('eyeicon')!.innerText = "visibility_off";
    this.showPass ? this.textType = "text" : this.textType = "password";
  }

  public onLogin() {
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (res: AuthResponseModel) => {
          localStorage.setItem('token', res.token);
          this.loginForm.reset();
          this.router.navigate(['home']);
        },
        error: (err: HttpErrorResponse) => {
          alert(err.message);
        }
      })
    } else {
      alert("Username or password incorrect");
    }
  }
}
