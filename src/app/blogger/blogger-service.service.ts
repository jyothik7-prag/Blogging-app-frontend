import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogger } from './blogger';

@Injectable({
  providedIn: 'root'
})
export class BloggerServiceService {
  constructor(private http:HttpClient) { }
 
  addNewBlogger(bloggerAdd:Blogger):Observable<Blogger>{
    let observable: Observable<Blogger>=this.http.post<Blogger>("http://localhost:8081/api/v1/bloggerAdd",bloggerAdd);
    return observable;
  }

  getBloggerByid(id:number)
  {
    return this.http.get("http://localhost:8081/api/v1/blogger/"+id);
  }

  updateBlogger(blogger:Blogger)
  {
    return this.http.put("http://localhost:8081/api/v1/blogger",blogger);
  }
}