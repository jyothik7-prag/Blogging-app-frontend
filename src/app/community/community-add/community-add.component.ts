import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogger } from 'src/app/blogger/blogger';
import { Community } from '../community';
import { CommunityServiceService } from '../community-service.service';

@Component({
  selector: 'app-community-add',
  templateUrl: './community-add.component.html',
  styleUrls: ['./community-add.component.css']
})
export class CommunityAddComponent implements OnInit {

  dateObj=new Date();
  dateSend:string="";
  community:Community;
  communityAdded:Community | undefined;
  blogger:number=0;


  constructor(private route:Router,private service:CommunityServiceService,private activatedRoute :ActivatedRoute)
  { 
        this.dateSend= this.dateObj.toDateString();
        this.community=new Community(0,"",0,0,new Date(),[],[],[],[]);
  }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params=>
      {
        this.blogger=+params['blogId'];
      })
  }

  addCommunityList()
  {
      console.log("new community")
        this.service.addNewCommunity(this.community).subscribe((response:any)=>
        {
          this.communityAdded=response;
          console.log("Added Community"+JSON.stringify(this.communityAdded?.communityId));
          this.route.navigate(['/community-list',this.blogger]);
      
        },
        (error:any)=>
        {
            console.log(error);
            alert("you are already a part of this community");
            this.route.navigate(['/community-list',this.blogger]);
        }
        ); 
  }
//   this.employeeService.addEmployee(this.employee).subscribe((response: any) => {
//     console.log("Hello from add component" + JSON.stringify(this.employee));
//     this.router.navigate(['/employee']);
//   }
//   );
// }
goBackToList()
{
  this.route.navigate(['/community-list',this.blogger]);
}

}
