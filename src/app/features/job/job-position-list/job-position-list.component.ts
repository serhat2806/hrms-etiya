import { Component, OnInit } from '@angular/core';
import { JobPosition } from 'src/app/models/jobPosition/jobPosition';
import { JobPositionService } from 'src/app/services/job-position.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-position-list',
  templateUrl: './job-position-list.component.html',
  styleUrls: ['./job-position-list.component.css']
})
export class JobPositionListComponent implements OnInit {

  jobPositions:JobPosition[]=[]
  loading:boolean=true
  user:any

  constructor(private jobPositionService:JobPositionService,private userService:UserService) { }

  ngOnInit(): void {
    this.getPositions()

  }

  getPositions(){

    this.jobPositionService.getJobPositions().subscribe((data:any)=>{
      this.jobPositions=data.data
      this.loading=false
    })

  }

 
}
