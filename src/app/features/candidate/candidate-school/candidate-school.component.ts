import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-school.service';
import { DepartmentService } from 'src/app/services/department.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-candidate-school',
  templateUrl: './candidate-school.component.html',
  styleUrls: ['./candidate-school.component.css']
})
export class CandidateSchoolComponent implements OnInit {

  candidateSchoolForm:FormGroup
  departments:Department[]=[]
  schools:School[]=[]
  candidate:any
  loading:boolean=true
  candidateSchools: School[] = [];
  loggedUser: any;

  constructor(private candidateSchoolService:CandidateSchoolService,
              private formBuilder:FormBuilder,
              private toastrService:ToastrService,
              private departmentService:DepartmentService,
              private schoolService:SchoolService) { }

  ngOnInit(): void {
    this.createCandidateSchoolForm()
    this.getDepartments()
    this.getSchools()
    this.getCandidateByGradYear();
    this.getCandidateId()
    console.log( this.getCandidateId())
   
    
  }

  createCandidateSchoolForm(){
    this.candidateSchoolForm = this.formBuilder.group({
      candidateId: [this.getCandidateId()],
      departmentId: ["", Validators.required],
      graduationYear: [""],
      schoolId: ["", Validators.required],
      startYear:["",Validators.required],
    })
  }

  add(){
    if(this.candidateSchoolForm.valid){
      this.candidateSchoolService.add(this.candidateSchoolForm.value).subscribe((response:any)=>{
        console.log(this.candidateSchoolForm.value);
        this.pageReloadDelay()
        this.toastrService.success(response.message ,"okul bilgileri eklendi")
        this.candidateSchoolForm.reset()
      },
      (responseError) => {
        this.toastrService.error(
          JSON.stringify(responseError.error.data.errors),
          'Doğrulama hatası'
        );
      }
    );
  } else {
    this.toastrService.error('iki kere aynı pozisyon eklenemez');
  }

}

getDepartments(){
  this.departmentService.getAll().subscribe((data:any)=>{
    this.departments=data.data
  })
}


getSchools(){
  this.schoolService.getAll().subscribe((data:any)=>{
    this.schools=data.data
  })
}

 getCandidateId():any{
   this.candidate = JSON.parse(localStorage.getItem('user'))
   return this.candidate.data.id
 }

 getUserId(): number {
  this.loggedUser = JSON.parse(localStorage.getItem('user'));
  return this.loggedUser.data.id;
}

 getCandidateByGradYear() {
  this.candidateSchoolService.getCandidatesByGradYear(-1).subscribe((response: any) => {response.data = response.data.filter
    ((r) => r.candidate.id === this.getUserId());
      this.candidateSchools = response.data;
      this.loading = false;
    });
}

deleteSchool(schlId: number) {
  this.candidateSchoolService.deleteById(schlId).subscribe((response: any) => {
      this.toastrService.warning('Delete successful');
      this.pageReloadDelay();
    });
}

pageReloadDelay() {
  setTimeout(location.reload.bind(location), 1000);
}


}
