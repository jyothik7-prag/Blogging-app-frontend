import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogger } from '../blogger/blogger';
import { Community } from '../community/community';
import { User } from '../user/user';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private httpClient: HttpClient) { }
  postArray=[
    // new Post(0,"",new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),"",0,[],0,true,true,true,true,"",new Community(0,"",0,0,new Date(),[],[],[],[]))
  ]
  getPost():any{
    return this.httpClient.get("http://localhost:8081/api/v1/posts");
  }
  addNewPost(post:Post){
    console.log("In service layer",post)
    return this.httpClient.post("http://localhost:8081/api/v1/posts",post);
  }

  getPostById(id:number):any{
    return this.httpClient.get("http://localhost:8081/api/v1/posts/"+id);
  }

  updatePost(post:Post)
  {
    return this.httpClient.put("http://localhost:8081/api/v1/posts",post);
  }

}