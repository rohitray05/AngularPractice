import { Component, OnInit } from "@angular/core";

@Component({
  selector:'app-user', //<app-user></app-user>
  //selector:['app-user], -> <div app-user></divs>
  //selector:'.app-user', -> <div class="app-user"></div>
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css'],
  
})

export class UserComponent implements OnInit{
  dataBind:string='String InterPolation';
  allowNewUser:boolean=false;
  userCreatedStatus:string='No User is Created';
  userName:string='';
  userNameTwoWay:string='';
  isUserCreated:boolean=false;
  users:Array<string>=['user1','user2','user3','user4'];
  constructor(){
   setTimeout(() => {
     this.allowNewUser=true
   }, 2000);
  }
  
  ngOnInit():void{
  }
  
  changeUserCreatedStatus(){
  this.isUserCreated=true;
  this.userCreatedStatus='User is Created';

  }

  onUpdateUser(input:Event){
   //console.log(input)
   this.userName = (input.target as HTMLInputElement).value;
  }

  getColor(){
    return 'green';
  }
}