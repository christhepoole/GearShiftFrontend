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
  private jwtHelper = new JwtHelperService();
  public user = new UserModel;
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
    this.authenticateUser();
  }

  public authenticateUser() {
    let token = localStorage.getItem('token');

    if(!token || this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['login']);
    } else {
      let decodedToken = this.jwtHelper.decodeToken(token);
      
      this.auth.getUserProfile(decodedToken.Id).subscribe({
        next: (res) => {
          this.auth.user = res;
          this.user = this.auth.user;
          console.log(this.auth.user);
        }
      })
    }
  }

  public onLogout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
