import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-navi-user-info',
  templateUrl: './navi-user-info.component.html',
  styleUrls: ['./navi-user-info.component.css']
})
export class NaviUserInfoComponent implements OnInit {

  constructor() { }
  userId:string
  userInfo:any
  user:any
  messsage:any

  ngOnInit(): void {
    console.log(this.getUserInfo())
  }

  getUserInfo(){
    if (localStorage.getItem("user")) {

    this.user = JSON.parse(localStorage.getItem("user"))
      this.userInfo=this.user.data
      this.messsage=this.user.message
      if(this.messsage.includes("employer")){
        this.userId="employer"
      }
      else if (this.messsage.includes("candidate")) {
        this.userId="candidate"
      } else {

        this.userId="systemEmployee"

      }

  }
  }
}