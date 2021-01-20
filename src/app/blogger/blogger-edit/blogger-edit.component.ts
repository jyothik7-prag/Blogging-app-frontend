import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Community } from 'src/app/community/community';
import { CommunityServiceService } from 'src/app/community/community-service.service';
import { User } from 'src/app/user/user';
import { Blogger } from '../blogger';
import { BloggerServiceService } from '../blogger-service.service';

@Component({
  selector: 'app-blogger-edit',
  templateUrl: './blogger-edit.component.html',
  styleUrls: ['./blogger-edit.component.css']
})
export class BloggerEditComponent implements OnInit {
  blogId:number=0;
  commId:number=0;
  bloggerEdit!: Blogger;
  communityReceived!: Community;

  constructor(private activatedRoute:ActivatedRoute,private bloggerService:BloggerServiceService,private communityService :CommunityServiceService,private route:Router) 
  { 
    
   
  }

  ngOnInit(): void {
    this.bloggerEdit=new Blogger(0,new User(0,"",""),"",[],[],[],[],[]);
    // this.communityReceived=new Community(0,"",0,0,new Date(),[],[],[],[]);
    this.activatedRoute.params.subscribe(params=>{
      this.commId=+params['commId']
      this.blogId=+params['idArrived']});
      this.getBloggerThroughId();
      
      
     
  }

  getBloggerThroughId()
  {
    this.bloggerService.getBloggerByid(this.blogId).subscribe((response:any)=>
    {
      this.bloggerEdit=response;
      console.log("retrieved blogger by id"+this.bloggerEdit.bloggerId);
      this.getCommunityThroughBlogger();
    
    
      
    })
  }

  getCommunityThroughBlogger()
  {
    this.communityService.getCommunityById(this.commId).subscribe((response:any)=>
    {
     
      this.communityReceived=response;
      console.log("In getBlogger"+this.communityReceived);
      this.bloggerEdit.communities.push(this.communityReceived)
      this.updateBloggerCommunity();
      },
    (error:any)=>
    {
      console.log(error);
    })
  }

  updateBloggerCommunity()
  {
 
    this.bloggerService.updateBlogger(this.bloggerEdit).subscribe((response:any)=>
    {
        console.log(response)
        alert("You got added to the community");
        console.log("trying to send this",this.commId,this.blogId);
        this.route.navigate(['/community-list',this.blogId]);
    },
    (error:any)=>
    {
      alert("Already a part of this community");
      this.route.navigate(['/community-list',this.blogId]);
        console.log(error);
    })


  }

}
