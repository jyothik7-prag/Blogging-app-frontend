export class Community
{
    communityId:number;
    communityDescription:string;
    onlineMembers:number;
    createdOn:Date;
    totalMembers:number;
    postRulesAllowed:String[];
    postRulesDisAllowed:String[];
    banningPolicy:String[];
    flairs:String[];

    constructor(communityId:number,communityDescription:string,totalMembers:number,
        onlineMembers:number,createdOn:Date,postRulesAllowed:String[],postRulesDisAllowed:String[],
        banningPolicy:String[],flairs:String[])
    {
        this.communityId=communityId;
        this.communityDescription=communityDescription;
        this.onlineMembers=onlineMembers;
        this.createdOn=createdOn;
        this.totalMembers=totalMembers;
        this.postRulesAllowed=postRulesAllowed;
        this.postRulesDisAllowed=postRulesDisAllowed;
        this.banningPolicy=banningPolicy;
        this.flairs=flairs;
    }
}