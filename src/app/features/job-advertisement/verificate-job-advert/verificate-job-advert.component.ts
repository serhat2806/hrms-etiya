import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-verificate-job-advert',
  templateUrl: './verificate-job-advert.component.html',
  styleUrls: ['./verificate-job-advert.component.css']
})
export class VerificateJobAdvertComponent implements OnInit {

  unverifiedJobs: JobAdvertisement[] = [];
  loading: boolean = true;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getUnverifiedJobs();
  }

  getUnverifiedJobs() {
    this.jobAdvertisementService.getUnverifiedJobAdverts(-1).subscribe((response:any)=>{
      this.unverifiedJobs = response.data;
      this.loading = false;
    })
  }

  changeVerification(job:JobAdvertisement) {
    this.jobAdvertisementService.changeVerificationJobAdverts(job).subscribe((response:any)=>{
      this.toastrService.success("Verification changed successfully.")
    })
  }

  changeActivite(jobAdvertisement:JobAdvertisement){
    this.jobAdvertisementService.closeJobAdvertisement(jobAdvertisement).subscribe((response:any)=>{
    })
  }





 
}
