import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogger } from '../blogger/blogger';
import { Community } from '../community/community';
import { Post } from '../post/post';
import { User } from '../user/user';
import {Comments} from './comments';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private httpClient:HttpClient) { }

//   commentArr=[
//     new Comments(101,"wow",10,new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),new Post(0,"",new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),"",0,[],0,true,true,true,true,"",new Community(0,"",0,0,new Date(),[],[],[],[])),false),
//     new Comments(102,"wonderful",20,new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),new Post(0,"",new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),"",0,[],0,true,true,true,true,"",new Community(0,"",0,0,new Date(),[],[],[],[])),false)
// ]

  getComments()
  {
    // return this.httpClient.get("")
    return this.httpClient.get("http://localhost:8081/api/v1/comments");
  }

  addNewComment(commentAdd:Comments)
  {
    return this.httpClient.post("http://localhost:8081/api/v1/comments",commentAdd);
  }

  getCommentsByPostId(id:number)
  {
    return this.httpClient.get("http://localhost:8081/api/v1/commentspost/"+id);
  }
}
