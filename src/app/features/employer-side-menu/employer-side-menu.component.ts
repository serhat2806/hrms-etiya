import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-side-menu',
  templateUrl: './employer-side-menu.component.html',
  styleUrls: ['./employer-side-menu.component.css']
})
export class EmployerSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.clear()
  }
}
