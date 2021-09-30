import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateExperience } from 'src/app/models/candidate/candidate-experience/candidateExperience';
import { JobPosition } from 'src/app/models/jobPosition/jobPosition';
import { CandidateExperienceService } from 'src/app/services/candidate-experience.service';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-candidate-experience',
  templateUrl: './candidate-experience.component.html',
  styleUrls: ['./candidate-experience.component.css']
})
export class CandidateExperienceComponent implements OnInit {

  candidateExperienceForm:FormGroup
  candidate:any
  positions:JobPosition[] = []
  loading:boolean=true
  loggedUser: any
  candidateExperiences: CandidateExperience[] = [];
  candidateJobExperience: CandidateExperience;
  

  constructor(private toastrService:ToastrService,
              private candidateExperienceService:CandidateExperienceService,
              private formBuilder:FormBuilder,
              private jobPositionService:JobPositionService
              ) { }

  ngOnInit(): void {
    this.createCandidateExperienceForm()
    this.getJobPositions()
    this.getCandidateByQuitYear()
    
    
  }

  createCandidateExperienceForm(){
    this.candidateExperienceForm = this.formBuilder.group({
      candidateId: [this.getCandidateId()],
      positionId: ["", Validators.required],
      quitYear: ["", [Validators.required,Validators.maxLength(2021)]],
      startYear: ["", Validators.required],
      workPlace:["",Validators.required],
    })
  }

  add(){
    if(this.candidateExperienceForm.valid){
      this.candidateExperienceService.add(this.candidateExperienceForm.value).subscribe((response:any)=>{
        console.log(this.candidateExperienceForm.value);
        this.pageReloadDelay();
        this.toastrService.success(response.message ,"iş bilgileri eklendi")
        this.candidateExperienceForm.reset()
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
  } else {
    this.toastrService.error('hata');
  }

}

  
  getCandidateId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.data.id
  }

  getJobPositions(){
    this.jobPositionService.getJobPositions().subscribe((data:any)=>{
     this.positions = data.data
    })
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
  
  getCandidateByQuitYear() {
    this.candidateExperienceService.getCandidatesByQuitYear(-1).subscribe((response: any) => {
        response.data = response.data.filter((r) => r.candidate.id === this.getUserId());
        this.candidateExperiences = response.data;
        this.loading = false;
      });
  }



  deleteJobExperience(jobExpId: number) {
    this.candidateExperienceService.deleteById(jobExpId).subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay()
      });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

}
