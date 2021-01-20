import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloggerAddComponent } from './blogger/blogger-add/blogger-add.component';
import { BloggerEditComponent } from './blogger/blogger-edit/blogger-edit.component';
import { CommentAddComponent } from './comment/comment-add/comment-add.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommunityAddComponent } from './community/community-add/community-add.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { TitleComponent } from './title/title.component';
import { UserSigninComponent } from './user/user-signin/user-signin.component';

const routes: Routes = [

  {path:'community-add',component:CommunityAddComponent},
  {path:'community-list',component:CommunityListComponent},
  {path:'comment-list',component:CommentListComponent},
  {path:'comment-add',component:CommentAddComponent},
  {path:'blogger-add',component:BloggerAddComponent},
  {path:'blogger-edit',component:BloggerEditComponent},
  {path:'post-list',component:PostListComponent},
  {path:'user-sign',component:UserSigninComponent},
  {path:'community-list/:blogId',component:CommunityListComponent},
  {path:'blogger-edit/:commId/:idArrived',component:BloggerEditComponent},
  {path:'post-list/:commId/:blogId',component:PostListComponent},
  {path:'post-add/:commId/:blogId',component:PostAddComponent},
  {path:'community-add/:blogId',component:CommunityAddComponent},
  {path:'comment-list/:postId/:blogId',component:CommentListComponent},
  {path:'comment-add/:postId/:blogId',component:CommentAddComponent},
  {path:'sign-in',component:UserSigninComponent},
  {path:'post-edit',component:PostEditComponent},
  {path:'title',component:TitleComponent},
  {path:'comment-list/:postId/:blogId/:commId',component:CommentListComponent},
  {path:'comment-add/:postId/:blogId/:commId',component:CommentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{
  
}
