import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  message:any

  constructor(private httpClient:HttpClient) 
  { }

  validation(userObj:User) {
     return  this.httpClient.post("http://localhost:8081/api/v1/signIn",userObj);
  
  }

  // addNewBlogger(bloggerAdd:Blogger):Observable<Blogger>{
  //   let observable: Observable<Blogger>=this.http.post<Blogger>("http://localhost:8081/api/v1/bloggerAdd",bloggerAdd);
  //   return observable;
  // }
}
