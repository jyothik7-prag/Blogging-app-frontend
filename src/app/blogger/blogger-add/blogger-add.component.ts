import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Community } from 'src/app/community/community';
import { Post } from 'src/app/post/post';
import { User } from 'src/app/user/user';
import { Blogger } from '../blogger';
import { BloggerServiceService } from '../blogger-service.service';


@Component({
  selector: 'app-blogger-add',
  templateUrl: './blogger-add.component.html',
  styleUrls: ['./blogger-add.component.css']
})
export class BloggerAddComponent implements OnInit {
 // blogger!:Blogger;
 //blogger:any;
 // blogger!:Blogger;
  //blogger:any;
  blogger!: Blogger;
  bloggerAdd!: Blogger;

  constructor(private bloggerService:BloggerServiceService,private route:Router) { }

  ngOnInit(): void {
    this.blogger=new Blogger(0,new User(0,"",""),"",[],[],[],[],[]);
  }
  // registerForm(){ 
    
  // }
 addBlogger(bloggerInsertionForm: any){
  // this.route.navigate(['/comunity-list']);
  console.log(this.blogger);
    this.bloggerService.addNewBlogger(this.blogger).subscribe((response:any)=>{
    this.blogger=response;
    console.log(this.blogger); 
    this.route.navigate(['/community-list',this.blogger.bloggerId]);
    //  this.route.navigate(['/post-list'])
     },
     (error: any) => {
      alert("Already registered with this email id!")
      });
    console.log("blogger id is"+this.blogger.bloggerId);
   
  } 

  discard()
  {
    this.route.navigate(['/sign-in']);
  }

}