import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-job-position-add',
  templateUrl: './job-position-add.component.html',
  styleUrls: ['./job-position-add.component.css']
})
export class JobPositionAddComponent implements OnInit {

  jobPositionAddForm:FormGroup

  constructor(private jobPositionService:JobPositionService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createJobAddForm()
  }

  createJobAddForm(){
    this.jobPositionAddForm = this.formBuilder.group({
      title: ["",Validators.required]
    })
  }
  

  add(){
    if(this.jobPositionAddForm.valid){
      console.log(this.jobPositionAddForm.value)
      this.pageReloadDelay()
      this.toastrService.success("Pozisyon Eklendi")
      this.jobPositionService.getJobPositionAdd(this.jobPositionAddForm.value).subscribe(data=>{
    })
  }else{
    this.toastrService.error("Pozisyon Eklenemedi")
  }
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
