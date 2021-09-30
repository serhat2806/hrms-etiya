import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class EmployeProfilComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.user=this.userService.getEmployer()
    console.log(this.user)
  }

}
