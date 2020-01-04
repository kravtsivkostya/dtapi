import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public entity: string;
  public action: string;
  public Request: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loginCheck();
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
  logout() {
    const entity = 'login';
    const action = 'logout';
    this.appService.getEntity(entity, action).subscribe();
    window.location.href = '/login';
  }
}
