import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-activ-job-advert-by-employer',
  templateUrl: './activ-job-advert-by-employer.component.html',
  styleUrls: ['./activ-job-advert-by-employer.component.css']
})
export class ActivJobAdvertByEmployerComponent implements OnInit {

  activeJobsByEmployer : JobAdvertisement[]=[]
  loading:boolean = true

  constructor(private jobAdvertisementService:JobAdvertisementService) { }

  ngOnInit(): void {
    this.getJobAdvertActiveByEmployer()
  }

  getJobAdvertActiveByEmployer(){
    this.jobAdvertisementService.getActiveJobByDate().subscribe((data:any)=>{
      this.activeJobsByEmployer = data.data
      console.log(this.activeJobsByEmployer)
      this.loading=false
    })

  }


}
