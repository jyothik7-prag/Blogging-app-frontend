export class User{
    userId:number;
    role:string;
    password:string;

    constructor( userId:number,role:string,password:string ){
        this.userId=userId;
        this.role=role;
        this.password=password;

    }
}