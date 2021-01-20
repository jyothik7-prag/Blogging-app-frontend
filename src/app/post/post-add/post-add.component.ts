import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogger } from 'src/app/blogger/blogger';
import { BloggerServiceService } from 'src/app/blogger/blogger-service.service';
import { Community } from 'src/app/community/community';
import { CommunityServiceService } from 'src/app/community/community-service.service';
import { User } from 'src/app/user/user';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  dateObj=new Date();
  post!: Post;
  commId:number=0;
  blogId:number=0;
  bloggerEdit!: Blogger;
  communityReceived!: Community;
 

  constructor(private route:Router,
    private service:PostServiceService,
    private activatedRoute:ActivatedRoute,
    private  bloggerService: BloggerServiceService,
    private communityService:CommunityServiceService) {

    this.post=new Post(0,"Hello",new Blogger(0,new User(0,"",""),"",[],[],[],[],[]),0,new Date(),[],0,true,true,true,true,"",new Community(0,"",0,0,new Date(),[],[],[],[]));
   }

  ngOnInit(): void {
    console.log("hello")
    this.activatedRoute.params.subscribe(params=>
      {
        this.commId=+params['commId'];
        this.blogId=+params['blogId'];
        
        console.log("In post add"+this.commId);
    
        console.log("in post add"+this.blogId);
        this.getBloggerThroughId();
      })

  }
 
  getBloggerThroughId()
  {
    this.bloggerService.getBloggerByid(this.blogId).subscribe((response:any)=>
    {
     
      this.bloggerEdit=response;
      

      console.log("blogr by id in post-add"+this.bloggerEdit.bloggerId);
     
      console.log("blogger retrieved" +this.bloggerEdit.bloggerId);

      this.getCommunityThroughBlogger();  
    })
  }

  getCommunityThroughBlogger()
  {
    this.communityService.getCommunityById(this.commId).subscribe((response:any)=>
    {
      this.communityReceived=response;
      this.bloggerEdit.communities.push(this.communityReceived);
      console.log("In post-add"+this.communityReceived);
       this.post.community=this.communityReceived;
      this.post.createdBy=this.bloggerEdit;
      console.log(this.post);
      // console.log("got community through Id"+this.communityReceived.communityId);
    })
  }


  addPostList(){
    console.log(this.post.title);
    this.service.addNewPost(this.post).subscribe((response:any)=>
      {
        this.post=response;
        console.log(response);
        this.route.navigate(['/post-list',this.commId,this.blogId]);
        
      },
      (error:any)=>
        {
            console.log(error);
        });
    
  }

  // updateBloggerWithPost()
  // {
  //   if(!this.bloggerEdit.posts.includes(this.post))
  //   {
  //     this.bloggerService.updateBlogger(this.bloggerEdit).subscribe((response:any)=>
  //     {
  //       this.bloggerEdit=response;
  //       console.log(this.bloggerEdit);
  //     },
  //     (error:any)=>
  //     {
  //       console.log(error);
  //     });
  //   }
  //   else{
  //     alert("post add error");
  //   }
  // }
  goBack()
  {
    this.route.navigate(['/post-list',this.commId,this.blogId]);
  }

}