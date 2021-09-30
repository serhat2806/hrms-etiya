import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-active-job-advert-by-date',
  templateUrl: './active-job-advert-by-date.component.html',
  styleUrls: ['./active-job-advert-by-date.component.css']
})
export class ActiveJobAdvertByDateComponent implements OnInit {

  jobAdvertByDates : JobAdvertisement[] = []
  loading:boolean=true

  constructor(private jobAdvetisementService:JobAdvertisementService) { }

  ngOnInit(): void {
    this.getJobAdvertActive()
  }

  getJobAdvertActive(){
    this.jobAdvetisementService.getActiveJobByDate().subscribe((data:any)=>{
      this.jobAdvertByDates = data.data
      console.log(this.jobAdvertByDates)
      this.loading=false
    })
  }
}
