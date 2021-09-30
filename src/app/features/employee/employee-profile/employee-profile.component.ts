import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  

  
  constructor(private userService:UserService) { }
 
  ngOnInit(): void {

   this.user()
  }

  user(){
    return this.userService.getEmployer()
  }

  

}
