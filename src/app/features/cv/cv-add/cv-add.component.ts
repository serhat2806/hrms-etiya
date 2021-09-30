import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {



  constructor(private cvService: CvService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private candidateService: CandidateService) { }

  catchCvIdValue:number
  cvAddForm: FormGroup
  candidate: any
  candidateJobExperienceIds: number[] = [];
  candidateLanguageIds: number[] = [];
  candidateSchoolIds: number[] = [];
  candidateSkillIds: number[] = [];
  loggedUser: any;
  loading: boolean = true
  loggedCandidate: Candidate;
  cv: Cv[] = []




  ngOnInit(): void {
    this.createCvAddForm()
    // this.getCvById()
    console.log(this.cv)
    this.getCandidateById()
  }

  catchCvId(cvId:number){
    this.catchCvIdValue = cvId
  }



  createCvAddForm() {
    this.cvAddForm = this.formBuilder.group({
      candidateId: [this.getUserId()],
      candidateJobExperienceIds: [this.getCandidateJobExperienceIds()],
      candidateLanguageIds: [this.getCandidateLanguageIds()],
      candidateSchoolIds: [this.getCandidateSchoolIds()],
      candidateSkillIds: [this.getCandidateSkillIds()],
      coverLetter: ['', Validators.required],
      title: ['', Validators.required],

    });
  }

  cvAdd() {
    if (this.cvAddForm.valid) {
      console.log(this.cvAddForm.value)
      this.cvService.add(this.cvAddForm.value).subscribe(
        (response: any) => {
          console.log(this.cvAddForm.value);
          //  this.pageReloadDelay();
          this.toastrService.success(response.message, 'CV eklendi');
        },
        (responseError) => {
          this.toastrService.error(
            JSON.stringify(responseError.error.data.errors),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('Hata.');
    }
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      this.candidateLanguageIds = response.data.candidateLanguages;
      this.candidateSkillIds = response.data.candidateSkills;
      this.cv = response.data.cvs;
      this.loading = false;
    });
  }

  getCandidateJobExperienceIds(): number[] {
    this.candidateService
      .getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        for (let i = 0; i < response.data.candidateJobExperiences.length; i++) {
          this.candidateJobExperienceIds[i] = response.data.candidateJobExperiences[i].id;
        }
      });
    return this.candidateJobExperienceIds;
  }

  getCandidateLanguageIds(): number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateLanguages.length; i++) {
        this.candidateLanguageIds[i] = response.data.candidateLanguages[i].id;
      }
    });
    return this.candidateLanguageIds;
  }

  getCandidateSchoolIds(): number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSchools.length; i++) {
        this.candidateSchoolIds[i] = response.data.candidateSchools[i].id;
      }
    });
    return this.candidateSchoolIds;
  }

  getCandidateSkillIds(): number[] {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      for (let i = 0; i < response.data.candidateSkills.length; i++) {
        this.candidateSkillIds[i] = response.data.candidateSkills[i].id;
      }
    });
    return this.candidateSkillIds;
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

  getCvById() {
    this.cvService.getById(this.getUserId()).subscribe((response: any) => {
      this.cv = response.data
    })
  }



}


