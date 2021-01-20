import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Blogger } from 'src/app/blogger/blogger';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  userObj!: User;
  bloggerSign!: Blogger;

  constructor(private router:Router,private userService:UserserviceService) 
  { 

  }
  ngOnInit(): void {
    this.userObj=new User(0,"","");
  }
  

  validateUser()
  {
    console.log(this.userObj.userId)
      this.userService.validation(this.userObj).subscribe((response:any)=>
      {
        this.bloggerSign=response;
        alert("You signed in!");
        this.router.navigate(['/community-list',this.bloggerSign.bloggerId]);
      },
      (error: any) => {
        alert("invalid email or password");
        console.log(error)
       
      });
       
  }

  goToBlogger()
  {
    this.router.navigate(['/blogger-add']);
  }

  goToHomePage()
  {
    this.router.navigate(['/title']);
  }

}