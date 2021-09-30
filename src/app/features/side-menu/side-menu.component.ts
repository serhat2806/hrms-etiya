import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


 
  items: MenuItem[];
  user: any;
  userId:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.checkuser()
  }

  checkuser(){
    if (localStorage.getItem("user")){
    this.user = JSON.parse(localStorage.getItem("user"))
        console.log(this.user)
        let message = this.user.message
        if (message.includes("employer")) {
           this.userId="employer"
        }

        if(message.includes("candidate")){
          this.userId= "candidate"
        }

        if(message.includes("systemEmployee")){
          this.userId= "systemEmployee"
        }
        
      }
      else{
        this.router.navigate(["login"])
        
      }
    
        
      }

}
