import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user = new UserModel;
  private jwtHelper = new JwtHelperService();
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    this.authenticateUser();
  }

  public authenticateUser() {
    if(!localStorage.getItem('token')) {
      this.router.navigate(['login']);
    } else {
      let token = localStorage.getItem('token') || '{}';
      let decodedToken = this.jwtHelper.decodeToken(token);
      
      this.auth.getUserProfile(decodedToken.Id).subscribe({
        next: (res) => {
          this.user = res;
          console.log(this.user);
        }
      })
    }
  }

  public onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
