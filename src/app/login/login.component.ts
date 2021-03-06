import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginObj = {
    username: '',
    password: ''
  };
  LoginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  public Request;
  public entity = 'login';
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loginCheck();
  }

  login(LoginForm): any {
    const body = { username: LoginForm.username, password: LoginForm.password };
    const action = 'index';
    this.appService.postEntity(this.entity, action, body).subscribe(data => {
      this.Request = data;
      if (this.Request.response === 'ok') {
        // window.location.href = '/speciality';
        // for github pages
        window.location.href = window.location.href + '/dtapi/speciality';
      }
    });
  }
  loginCheck(): any {
    const entity = 'login';
    const action = 'isLogged';
    this.appService.getEntity(entity, action).subscribe((data: object) => {
      this.Request = data;
      console.log(this.Request);
      if (this.Request.response === 'logged') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
      }
      if (this.Request.response === 'non logged') {
        document.getElementById('login').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
      }
    });
  }
}
