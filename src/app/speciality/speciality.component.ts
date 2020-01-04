import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/app/services/api.service';
import { Speciality } from './speciality';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {
  SpecialityForm = new FormGroup({
    speciality_code: new FormControl(),
    speciality_name: new FormControl(),
  });
  UpdateForm = new FormGroup({
    speciality_code: new FormControl(),
    speciality_name: new FormControl(),
  });
  public specialityArr: Speciality[] = [];
  public entity = 'Speciality';
  public message;
  public Request: any;
  public object: Speciality = {
    speciality_id: null,
    speciality_code: null,
    speciality_name: ' '
  };
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loginCheck();
    this.getSpeciality();
  }
  getSpeciality(): any {
    const action = 'getRecords';
    this.appService.getEntity(this.entity, action).subscribe((data: Speciality[]) => this.specialityArr = data);
  }
  createSpeciality(SpecialityForm): any {
    const action = 'insertData';
    const body = { speciality_code: SpecialityForm.speciality_code, speciality_name: SpecialityForm.speciality_name };
    this.appService.postEntity(this.entity, action, body).subscribe((data: Speciality[]) => this.specialityArr.push(data[0]));
  }
  delSpeciality(speciality: Speciality): any {
    console.log(this.specialityArr.indexOf(speciality));
    const action = 'del';
    this.appService.delEntity(this.entity, action, speciality.speciality_id).subscribe(
      (data: string) => {
        this.message = data; {
          if (this.message.response === 'ok') { this.specialityArr.splice(this.specialityArr.indexOf(speciality), 1); }
        }
      });
  }
  cloneEditEntity(speciality: Speciality): any {
    // this.object.speciality_code = speciality.speciality_code;
    // this.object.speciality_name = speciality.speciality_name;
    // this.object.speciality_id = speciality.speciality_id;
    this.object = { ...speciality };
  }
  updateSpeciality(UpdateForm): any {
    const action = 'update';
    const body = { speciality_code: UpdateForm.speciality_code, speciality_name: UpdateForm.speciality_name };
    this.appService.updEntity(this.entity, action, body, this.object.speciality_id).subscribe();
    this.getSpeciality();
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
