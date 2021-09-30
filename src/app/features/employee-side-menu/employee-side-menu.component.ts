import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-side-menu',
  templateUrl: './employee-side-menu.component.html',
  styleUrls: ['./employee-side-menu.component.css']
})
export class EmployeeSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signOut(){
    localStorage.clear()
  }

}
