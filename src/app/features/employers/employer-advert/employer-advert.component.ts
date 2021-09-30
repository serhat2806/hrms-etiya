import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employer-advert',
  templateUrl: './employer-advert.component.html',
  styleUrls: ['./employer-advert.component.css']
})
export class EmployerAdvertComponent implements OnInit {

  adverts:JobAdvertisement[]=[]
  loading:boolean=true
  constructor(private toastrService:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    
    this.getJobAdvert()
    console.log(this.adverts)

  }

  getJobAdvert(){
    this.adverts=this.userService.getEmployer().jobAdvertisements
    this.loading=false
  }



}
