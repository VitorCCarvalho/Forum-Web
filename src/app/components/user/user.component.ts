import { Component } from '@angular/core';
import { Login } from './login';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService: UserService){}

  token: string = ""
  LoginUser(){
    var username = (<HTMLInputElement>document.getElementById("input-username")).value
    var password = (<HTMLInputElement>document.getElementById("input-password")).value

    if(username != null && password != null){
      var login: Login = {
        username: username,
        password: password
      }
      this.userService.login(login).subscribe((resp) => {
        console.log(resp)
      })
    }
    
  }
}
