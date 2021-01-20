import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogger } from 'src/app/blogger/blogger';
import { Community } from '../community';
import { CommunityServiceService } from '../community-service.service';


@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communityList!: Community[];
  bloggerArrived!: Blogger;
  idArrived:number=0;
 
  constructor(private communityService:CommunityServiceService,private route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    // console.log("call");
    this.communityService.getCommunity().subscribe((response:any)=>
    {
      // console.log("Communities:"+JSON.stringify(response));
      this.communityList= response;
    });
    //  this.idArrived=Number(this.activateRoute.snapshot.paramMap.get('blogId'));
    this.activateRoute.params.subscribe(params=>
      this.idArrived=+params['blogId'] );
    
  }

  addCommunity()
  {
    this.route.navigate(['/community-add',this.idArrived]);
  }

  updateCommunityBlogger(communityShift:Community)
  {
    // console.log("In community join"+communityShift.communityId+this.idArrived)
      this.route.navigate(['/blogger-edit',communityShift.communityId,this.idArrived]);
  }

  signOut()
  {
    this.idArrived=0;
    this.route.navigate(['/sign-in']);
  }

  goDirectlyToPost(communityToPost:Community)
  {
    this.route.navigate(['/post-list',communityToPost.communityId,this.idArrived]);
  }

}
