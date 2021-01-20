import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { CommunityAddComponent } from './community/community-add/community-add.component';
import { CommunityEditComponent } from './community/community-edit/community-edit.component';
import { CommunityShowComponent } from './community/community-list/community-show/community-show.component';
import { BloggerListComponent } from './blogger/blogger-list/blogger-list.component';
import { BloggerShowComponent } from './blogger/blogger-list/blogger-show/blogger-show.component';
import { BloggerAddComponent } from './blogger/blogger-add/blogger-add.component';
import { BloggerEditComponent } from './blogger/blogger-edit/blogger-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostShowComponent } from './post/post-list/post-show/post-show.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentShowComponent } from './comment/comment-list/comment-show/comment-show.component';
import { CommentAddComponent } from './comment/comment-add/comment-add.component';
import { CommentEditComponent } from './comment/comment-edit/comment-edit.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSigninComponent } from './user/user-signin/user-signin.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityListComponent,
    CommunityAddComponent,
    CommunityEditComponent,
    CommunityShowComponent,
    BloggerListComponent,
    BloggerShowComponent,
    BloggerAddComponent,
    BloggerEditComponent,
    PostListComponent,
    PostShowComponent,
    PostAddComponent,
    PostEditComponent,
    CommentListComponent,
    CommentShowComponent,
    CommentAddComponent,
    CommentEditComponent,
    UserSigninComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
