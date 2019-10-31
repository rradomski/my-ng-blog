import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  user: User = new User();

  errorMessage = '';

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.name, this.user.password).subscribe(
      result => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('token', result.token);
        }

        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log(error);
        this.errorMessage = 'Username or pwd incorrect';
      }
    );
  }
}
