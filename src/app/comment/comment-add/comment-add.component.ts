// import { Comment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogger } from 'src/app/blogger/blogger';
import { BloggerAddComponent } from 'src/app/blogger/blogger-add/blogger-add.component';
import { BloggerListComponent } from 'src/app/blogger/blogger-list/blogger-list.component';
import { BloggerServiceService } from 'src/app/blogger/blogger-service.service';
import { Community } from 'src/app/community/community';
import { Post } from 'src/app/post/post';
import { PostServiceService } from 'src/app/post/post-service.service';
import { User } from 'src/app/user/user';
import { CommentServiceService } from '../comment-service.service';
import {Comments} from  '../comments';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  commentAdd!: Comments;
  postid:number=0;
  blogid:number=0;
  postGet!: Post;
  bloggerGet!: Blogger;
  commId:number=0;

  constructor(private commentService:CommentServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private postService:PostServiceService,
    private bloggerService:BloggerServiceService) { }

  ngOnInit(): void {
    
    this.commentAdd=new Comments(0,"",10,new Blogger(0,{password:"",role:"",userId:0},"",[],[],[],[],[]),
    new Post(0,"",new Blogger(0,{password:"",role:"",userId:0},"",[],[],[],[],[]),0,new Date(),[],0,false,false,false,false,"",new Community(0,"",10,10,new Date(),[],[],[],[])),false);
    this.activatedRoute.params.subscribe(params=>
      {
          this.postid=+params['postId'];
          this.blogid=+params['blogId'];
          this.commId=+params['commId']
      })
      console.log("postid  ",this.postid);
      console.log("blogid ",this.blogid);
      console.log("1");
      this.getPostFromId();

  }

  getPostFromId()
  {
    console.log("2");
    this.postService.getPostById(this.postid).subscribe((response:any)=>
    {
      console.log("3");
      this.postGet=response
      console.log("4");
      this.getBloggerById();
      
    },
    (error:any)=>{
        console.log(error);
    }
    );
      
  }

  getBloggerById()
  {
    this.bloggerService.getBloggerByid(this.blogid).subscribe((response:any)=>
    {
      this.bloggerGet=response;
      this.commentAdd.blogger=this.bloggerGet;
      this.commentAdd.post=this.postGet;

    },
    (error:any)=>
    {
      console.log(error);
        alert("cannot get blogger")
    })
  }



  addCommentList()
  {
      this.commentService.addNewComment(this.commentAdd).subscribe((response:any)=>
        {
          this.commentAdd=response;
          console.log(this.commentAdd);
          this.router.navigate(['/comment-list',this.postid,this.blogid,this.commId]);
        });
    
  }

  goBack()
  {
    this.router.navigate(['/comment-list',this.postid,this.blogid,this.commId]);
  }
}