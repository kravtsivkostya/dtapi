import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiURI = "http://dtapi.if.ua";
  constructor(private http: HttpClient) { }

  getEntity(entity, action) {
    const url = `${this.apiURI}/${entity}/${action}`;
    return this.http.get(url);
  }
  postEntity(entity, action, body) {
    const url = `${this.apiURI}/${entity}/${action}`;
    return this.http.post(url, body);
  }
  delEntity(entity, action, id) {
    const url = `${this.apiURI}/${entity}/${action}/${id}`;
    return this.http.get(url);
  }
}
