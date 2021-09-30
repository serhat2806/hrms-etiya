import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill/skill';
import { CandidateSkillService } from 'src/app/services/candidate-skill.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-candidate-skill',
  templateUrl: './candidate-skill.component.html',
  styleUrls: ['./candidate-skill.component.css']
})
export class CandidateSkillComponent implements OnInit {

  candidateSkillForm: FormGroup
  candidate:any
  skills: Skill[] = [];
  loggedUser: any;
  candidateSkills: Skill[] = [];
  loading: boolean = true;

  constructor(private toastrService:ToastrService,
              private candidateSkillService:CandidateSkillService,
              private formBuilder:FormBuilder,
              private skillService:SkillService,
              private candidateService: CandidateService,) { }

  ngOnInit(): void {
    this.createCandidateSkillForm()
    this.getSkills(); 
    this.getCandidateSkills();
  }

  createCandidateSkillForm(){
    this.candidateSkillForm = this.formBuilder.group({
      candidateId: [this.getCandidateId()],
      skillId: ["", Validators.required],
    })
  }

  add(){
    if(this.candidateSkillForm.valid){
      this.candidateSkillService.add(this.candidateSkillForm.value).subscribe((response:any)=>{
        this.toastrService.success(response.message ,"yetenek bilgileri eklendi")
        this.candidateSkillForm.reset()
        this.pageReloadDelay()
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
  } else {
    this.toastrService.error('iki yetenek iki kere eklenemez');
  }

}

  getCandidateId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.data.id
  }

  getSkills() {
    this.skillService.getAll().subscribe((data: any) => {
      this.skills = data.data;
    });
  }

  getCandidateSkills() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
        this.candidateSkills = response.data.candidateSkills;
        this.loading = false;
      });
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  deleteSkill(skillId: number) {
    this.candidateSkillService.deleteById(skillId).subscribe((response: any) => {
        this.toastrService.warning('Delete successful');
        this.pageReloadDelay();
      });
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

 
}
