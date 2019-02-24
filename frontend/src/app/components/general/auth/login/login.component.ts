import { Component, OnInit } from '@angular/core';
import { User } from '../../../../services/users/user'
import { UserService } from '../../../../services/users/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
  }

  loginUser(): void {
    console.log(this.user)
    this.service.loginUser(this.user)
      .subscribe(user => {
        this.user = user;
        console.log(user);
      });
  }

}
