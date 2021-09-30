import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidateExperience } from 'src/app/models/candidate/candidate-experience/candidateExperience';
import { CandidateExperienceService } from 'src/app/services/candidate-experience.service';

@Component({
  selector: 'app-candidate-experience-delete',
  templateUrl: './candidate-experience-delete.component.html',
  styleUrls: ['./candidate-experience-delete.component.css']
})
export class CandidateExperienceDeleteComponent implements OnInit {

  loading: boolean = true;
  loggedUser: any;
  candidateExperiences: CandidateExperience[] = [];
  jobExpId:any

  constructor(
    private candidateExperienceService: CandidateExperienceService,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    
    console.log(this.jobExpId)
    this.getCandidateByQuitYear();
   
  }

  // getUserId(){
  //   this.loggedUser = JSON.parse(localStorage.getItem('user'));
  //   this.jobExpId = this.loggedUser.candidateExperiences
  // }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  // deleteJobExperience() {
  //   this.candidateExperienceService.deleteById(this.jobExpId).subscribe((response: any) => {
  //       this.toastrService.warning('Delete successful');
  //       console.log(this.jobExpId)
  //     });
  // }

  deleteJobExperience(jobExpId: number) {
    this.candidateExperienceService
      .deleteById(jobExpId)
      .subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay()
      });
  }
  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
  getCandidateByQuitYear() {
    this.candidateExperienceService
      .getCandidatesByQuitYear(-1)
      .subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateExperiences = response.data;
        this.loading = false;
      });
  }
  

}

