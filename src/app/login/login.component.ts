import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public LoginForm: FormGroup;
  public response;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      "username": new FormControl(),
      "password": new FormControl(),
    });
  }

  sendLogin(LoginForm): any {
    console.log(LoginForm);
    this.appService.login(LoginForm).subscribe(data => this.response = data)
    console.log(this.response);
    // console.log('this is responce'+ this.response.response);
    if (this.response.response == "ok") {
      document.getElementById('test').style.display = "none"
    }
  }
}
