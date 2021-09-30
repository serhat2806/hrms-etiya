import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployerService } from 'src/app/services/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-apply-changes',
  templateUrl: './apply-changes.component.html',
  styleUrls: ['./apply-changes.component.css']
})
export class ApplyChangesComponent implements OnInit {

  updateApproveForm: FormGroup
  unverifiedJobAdvertisements:JobAdvertisement[]=[]
  loading:boolean=true
  editId:number

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private employerService: EmployerService,private employeeService:EmployeeService,
    private jobAdvertisementService:JobAdvertisementService) { }
    employe:any
    employeUpdate:any
  ngOnInit(): void {
    
    console.log(this.loading)
    this.getUnverifiedJobAdvertisements()
  }


  updateJobAdvertisementVerification(jobAdvertisement: JobAdvertisement){
    this.jobAdvertisementService.updateJobAdvertisementVerification(jobAdvertisement, this.editId).subscribe((response: any)=>{
      this.toastrService.success("İş ilanı onaylandı.");
      setTimeout(() => window.location.reload(), 1300);
    })
  }

  getUnverifiedJobAdvertisements(){
    this.jobAdvertisementService.getUnverifiedJobAdverts(-1).subscribe((response: any)=>{
      this.unverifiedJobAdvertisements = response.data;
      this.loading = false;
    })
  }

  catchId(editId: number){
    this.editId = editId;
  }


}
