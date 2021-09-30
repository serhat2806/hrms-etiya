import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/app/models/employer/employer';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent implements OnInit {

  loading:boolean=false
  employers:Employer[]=[]

  constructor(private employerService:EmployerService) { }

  ngOnInit(): void {
    this.getEmployers()
    console.log(typeof(this.employers))
  }

  getEmployers(){
    this.employerService.getEmployers().subscribe((data:any)=>{
      this.employers=data.data
      this.loading=false
    })
  }

}