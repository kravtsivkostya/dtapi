import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AppService } from 'src/app/services/api.service';
import { Speciality } from './speciality';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {
  SpecialityForm = new FormGroup({
    "speciality_code": new FormControl(),
    "speciality_name": new FormControl(),
  });
  public specialityArr: Speciality[] = [];
  public entity = 'Speciality';
  public message;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getSpeciality();
  }
  getSpeciality(): any {
    const action = 'getRecords'
    this.appService.getEntity(this.entity, action).subscribe((data: Speciality[]) => this.specialityArr = data)
  }
  createSpeciality(SpecialityForm): any {
    const action = 'insertData'
    const body = { speciality_code: SpecialityForm.speciality_code, speciality_name: SpecialityForm.speciality_name };
    this.appService.postEntity(this.entity, action, body).subscribe((data: Speciality[]) => this.specialityArr.push(data[0]))
  }
  delSpeciality(speciality: Speciality): any {
    console.log(this.specialityArr.indexOf(speciality))
    const action = 'del'
    this.appService.delEntity(this.entity, action, speciality.speciality_id).subscribe(
      (data: String) => { this.message = data; { if (this.message.response === 'ok') this.specialityArr.splice(this.specialityArr.indexOf(speciality), 1) } })
  }
}
