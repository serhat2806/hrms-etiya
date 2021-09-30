import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { CandidateSchool } from 'src/app/models/candidate/candidate-school/candidateSchool';
import { Department } from 'src/app/models/department/department';
import { School } from 'src/app/models/school/school';
import { CandidateSchoolService } from 'src/app/services/candidate-school.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-candidate-school-update',
  templateUrl: './candidate-school-update.component.html',
  styleUrls: ['./candidate-school-update.component.css']
})
export class CandidateSchoolUpdateComponent implements OnInit {

  candidateDepartmentUpdateForm:FormGroup
  candidateSchool:CandidateSchool[]=[]
  loggedUser: any;
  idToUpdate: number;
  schools:School[]=[]
  departments:Department[]=[]

  constructor(private candidateSchoolService:CandidateSchoolService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private departmentService:DepartmentService) { }

  ngOnInit(): void {
    this.createCandidateDepartmentUpdateForm()
    
  }

  createCandidateDepartmentUpdateForm(){
    this.candidateDepartmentUpdateForm = this.formBuilder.group({
      departmentId: ["", Validators.required],
      schoolId: ["", Validators.required],

    })
  }

  update(){
    if(this.candidateDepartmentUpdateForm.valid){
      this.candidateSchoolService.updateDepartment(this.candidateDepartmentUpdateForm.value).subscribe((data:any)=>{
        this.toastrService.success("waesrdfghj")
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

  

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  catchId(id: number) {
    this.idToUpdate = id;
  }

  getDepartments(){
    this.departmentService.getAll().subscribe((data:any)=>{
      this.departments=data.data
    })
  }
  


  

}
