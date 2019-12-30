import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { AppService } from 'src/app/services/api.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  public SubjectForm: FormGroup;
  public json;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.SubjectForm = this.formBuilder.group({
      "subject_name": new FormControl(),
      "subject_description": new FormControl(),
    });
  }

  createSubject(SubjectForm): any {
    console.log(SubjectForm);
    this.appService.subjectCreate(SubjectForm).subscribe(data => this.json = data)
    // console.log(this.json);

  }
}