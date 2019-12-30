import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(LoginForm) {
    const body = { username:LoginForm.username , password: LoginForm.password};
    return this.http.post('http://dtapi.if.ua/login/index', body);
  }
  subjectCreate(SubjectForm) { 
    const body = { subject_name: SubjectForm.subject_name , subject_description: SubjectForm.subject_description};
    return this.http.post('http://dtapi.if.ua/Subject/insertData/', body);
  }
}
