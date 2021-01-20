import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentServiceService } from '../comment-service.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  commentArray:any;
  postid:number=0;
  blogid:number=0;
  comId:number=0;

  

  constructor(private commentService:CommentServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>
        {
            this.postid=+params['postId'];
            this.blogid=+params['blogId'];
            this.comId=+params['commId'];
            console.log("received to comment list",this.postid,this.blogid);
        })
        this.getCommentsByPost();

  }

  getCommentsByPost()
  {
    this.commentArray=this.commentService.getCommentsByPostId(this.postid).subscribe((response:any)=>
    {
      this.commentArray=response
      console.log(this.commentArray);
    });
  }

  addComment()
  {
    console.log("sending to add comment",this.postid,this.blogid);
    this.router.navigate(['/comment-add',this.postid,this.blogid,this.comId]);
  }

  goBack()
  {
    this.router.navigate(['/post-list',this.comId,this.blogid]);
  }

}