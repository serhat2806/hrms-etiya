import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-close-job-advertisement',
  templateUrl: './close-job-advertisement.component.html',
  styleUrls: ['./close-job-advertisement.component.css']
})
export class CloseJobAdvertisementComponent implements OnInit {

  constructor(private jobAdvertisementService:JobAdvertisementService,private toastrService:ToastrService) { }

  

  ngOnInit(): void {
  }

  changeActivite(jobAdvertisement:JobAdvertisement){
    this.jobAdvertisementService.closeJobAdvertisement(jobAdvertisement).subscribe((response:any)=>{
    })
  }



}