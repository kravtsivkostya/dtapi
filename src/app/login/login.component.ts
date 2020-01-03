import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    "username": new FormControl(),
    "password": new FormControl(),
  });
  public Request;
  public entity = 'login'
  constructor(private appService: AppService) { }

  ngOnInit() {

  }
  login(LoginForm): any {
    const body = { username: LoginForm.username, password: LoginForm.password };
    const action = 'index'
    this.appService.postEntity(this.entity, action, body).subscribe(data => this.Request = data)
    console.log(this.Request);

    // if (this.Request.response == "ok") {
    //   document.getElementById('test').style.display = "none"

    //   document.getElementById('test').style.display = "block"

    // }
  }
}
