import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-side-menu',
  templateUrl: './candidate-side-menu.component.html',
  styleUrls: ['./candidate-side-menu.component.css']
})
export class CandidateSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signOut(){
    localStorage.clear()
  }
}
