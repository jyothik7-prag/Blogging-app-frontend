import { Injectable } from '@angular/core';
import { Community } from './community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {

 
  constructor( private h1:HttpClient) { }

  communityArray=[
    new Community(101,"Angular",100,5,new Date(),["Can have constructive discussion"],["Cannot discriminate others","good"],["unnecessary rules"],["good"]),
    new Community(102,"Java",100,5,new Date(),["Can have constructive discussion"],["Cannot discriminate others"],["unnecessary rules"],["good"])
  ]

  getCommunity()
  {
    console.log("hello");
    return this.h1.get("http://localhost:8081/api/v1/community");
    // return this.communityArray;
  }

  addNewCommunity(community:Community)
  {
    return this.h1.post("http://localhost:8081/api/v1/community",community);
    // this.communityArray[this.communityArray.length]=community;
  }

  getCommunityById(id:number)
  {
    return this.h1.get("http://localhost:8081/api/v1/community/"+id);
  }
 
}
