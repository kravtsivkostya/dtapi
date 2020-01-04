// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms'
// import { AppService } from 'src/app/services/api.service';
// import { Subject } from './subject';


// @Component({
//   selector: 'app-subject',
//   templateUrl: './subject.component.html',
//   styleUrls: ['./subject.component.css']
// })
// export class SubjectComponent implements OnInit {

//   public subjectsArr: Subject[] = [];
//   public entity = 'Subject'
//   SubjectForm = new FormGroup({
//     "subject_name": new FormControl(),
//     "subject_description": new FormControl(),
//   });

//   constructor(private appService: AppService) { }

//   ngOnInit() {
//     this.getSubject();
//   }
//   getSubject(): any {
//     const action = 'getRecords'
//     this.appService.getEntity(this.entity, action).subscribe((data: Subject[]) => this.subjectsArr = data)
//   }
//   createSubject(SubjectForm): any {
//     const action = 'insertData'
//     const body = { subject_name: SubjectForm.subject_name, subject_description: SubjectForm.subject_description };
//     this.appService.postEntity(this.entity, action, body).subscribe((data: Subject[]) => this.subjectsArr = data)
//     this.getSubject();
//   }
//   delSubject(subject: Subject): any {
//     const action = 'del'
//     this.appService.delEntity(this.entity, action, subject.subject_id).subscribe((data: Subject[]) => this.subjectsArr)
//     this.getSubject();
//   }
// }
