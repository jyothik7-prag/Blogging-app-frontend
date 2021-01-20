import { Blogger } from '../blogger/blogger';
import { BloggerAddComponent } from '../blogger/blogger-add/blogger-add.component';
import { Post } from '../post/post';

export class Comments
{
    commentId:number;
    commentDescription:String;
    votes:number;
    blogger:Blogger;
    post:Post;
    voteUp:boolean;

    constructor( commentId:number,
        commentDescription:String,
        votes:number,
        blogger:Blogger,
        post:Post,
        voteUp:boolean,
    )
    {
        this.commentId=commentId;
        this.commentDescription=commentDescription;
        this.votes=votes;
        this.blogger=blogger;
        this.post=post;
        this.voteUp=voteUp;
        
    }
   

    


}