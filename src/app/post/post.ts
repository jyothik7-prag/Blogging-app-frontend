import { ProviderAstType } from '@angular/compiler';
import { Blogger } from '../blogger/blogger';
import { Community } from '../community/community';
import { PostType } from './posttype';

export class Post{
    postId:number;
    title:String;
    createdBy:Blogger;
    content: PostType;
    createdDateTime:Date;
    comments: Comment[];
    votes: number;
    voteUp: boolean;
    notSafeForWork: boolean;
    spoiler: boolean;
    originalContent: boolean;
    flair: String;
    community: Community;

    constructor(postId:number, title: String,createdBy: Blogger,content: PostType,
        createdDateTime:Date,comments:Comment[],votes: number,voteUp:boolean,
        notSafeForWork: boolean,spoiler: boolean,originalContent: boolean,
        flair:String,community: Community){

            this.postId=postId;
            this.title=title;
            this.createdBy=createdBy;
            this.content=content;
            this.createdDateTime=createdDateTime;
            this.comments=comments;
            this.votes=votes;
            this.voteUp=voteUp;
            this.notSafeForWork=notSafeForWork;
            this.spoiler=spoiler;
            this.originalContent=originalContent;
            this.flair=flair;
            this.community=community;


        }
    }