import { Community } from '../community/community';
import {Comments} from '../comment/comments';
import { Post } from '../post/post';
import { User } from '../user/user';

export class Blogger{
    bloggerId:number;
    user:User;
    bloggerName:string;
    posts: Post[];
    comment: Comments[];
    upvoted:Post[];
    downvoted:Post[];
    communities: Community[];
    constructor(bloggerId:number,user:User,bloggerName:string,posts:Post[],comment:Comments[],upvoted:Post[],
        downvoted:Post[],communities:Community[]){
        this.bloggerId=bloggerId;
        this.user=user;
        this.bloggerName=bloggerName;
        this.posts=posts;
        this.comment=comment;
        this.upvoted=upvoted;
        this.downvoted=downvoted;
        this.communities=communities;
    }


}