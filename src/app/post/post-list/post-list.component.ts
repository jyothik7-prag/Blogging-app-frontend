import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList!: Post[];
  commId:number=0;
  blogid:number=0;
  postId:number=0;
  clicked:boolean=false;
  postEdit!: Post;
 

  constructor(private postService:PostServiceService,private route:Router,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.postService.getPost().subscribe((response:any)=>
    {
      console.log("Posts:",response)
      this.postList= response;
    });
    this.activatedRoute.params.subscribe(params=>{
      this.commId=+params['commId'];
      this.blogid=+params['blogId']
      console.log(this.commId);
      console.log(this.blogid);
    })

  }
  addPost(){
    this.route.navigate(['/post-add',this.commId,this.blogid]);
  }

  goToComments(postSend:Post)
  {
    this.postId=postSend.postId;
    console.log("go to comments postid blogid",postSend.postId,this.blogid);
    this.route.navigate(['/comment-list',postSend.postId,this.blogid,this.commId])
  }

goBack()
{
  this.route.navigate(['/community-list',this.blogid])
}

editUpvotes(postSend:Post)
{
    this.postService.getPostById(postSend.postId).subscribe((response:any)=>
    {
          this.postEdit=response;
          this.updateTheVotes();
    });

}

updateTheVotes()
{
  this.postEdit.votes=this.postEdit.votes+1;
  this.postService.updatePost(this.postEdit).subscribe((response:any)=>
  {
    this.postEdit=response;
  })


}



}