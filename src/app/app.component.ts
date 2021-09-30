import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hrms';
  loggedUser:any


  changenavi(){
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser
  }

  

}
