import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateExperience } from 'src/app/models/candidate/candidate-experience/candidateExperience';
import { CandidateLanguage } from 'src/app/models/candidate/candidate-language/candidateLanguage';
import { CandidateSchool } from 'src/app/models/candidate/candidate-school/candidateSchool';
import { CandidateSkill } from 'src/app/models/candidate/candidate-skill/candidateSkill';
import { Cv } from 'src/app/models/cv/cv';
import { Department } from 'src/app/models/department/department';
import { JobPosition } from 'src/app/models/jobPosition/jobPosition';
import { Language } from 'src/app/models/language/language';
import { School } from 'src/app/models/school/school';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateExperienceService } from 'src/app/services/candidate-experience.service';
import { CandidateSchoolService } from 'src/app/services/candidate-school.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  loggedCandidate: Candidate;
  candidateLanguages: any;
  candidateJobExperiences: any;
  candidateSchools: any;
  candidateSkills: any;
  candidateImage:any

  loggedUser: any;
  constructor(
    private candidateService: CandidateService,
    private candidateExperienceService: CandidateExperienceService,
    private candidateSchoolService: CandidateSchoolService,
    private imageService:ImageService
  ) {}

  ngOnInit(): void {
    this.getCandidateById();
    this.getCandidateByQuitYear();
    this.getCandidateByGradYear();
    // this.getCandidateImageById();
    console.log(this.loggedCandidate)
    // console.log(this.getUserId())
    
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId())
      .subscribe((response: any) => {
        this.loggedCandidate = response.data;
        this.candidateLanguages = response.data.candidateLanguages;
        this.candidateSkills = response.data.candidateSkills;
      });
  }

  // getCandidateImageById() {
  //   this.candidateService
  //   .getCandidateById(this.getUserId())
  //   .subscribe((response: any) => {
  //     this.loggedCandidate = response.data;
  //     this.candidateImage = response.data.Image;
  //     console.log(this.loggedCandidate);
  //   });
  // }

  getCandidateByQuitYear() {
    this.candidateExperienceService.getCandidatesByQuitYear(-1).subscribe((response: any) => {
        response.data = response.data.filter(
          (r) => r.candidate.id === this.getUserId()
        );
        this.candidateJobExperiences = response.data;
      });
  }

  getCandidateByGradYear() {
    this.candidateSchoolService.getCandidatesByGradYear(-1).subscribe((response: any) => {
        response.data = response.data.filter((r) => r.candidate.id === this.getUserId());
          this.candidateSchools = response.data;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getCurrentYear(): number {
    let year = new Date().getFullYear();
    return year;
  }


}
