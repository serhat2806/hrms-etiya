import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/models/cv/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-update-cv-title',
  templateUrl: './update-cv-title.component.html',
  styleUrls: ['./update-cv-title.component.css']
})
export class UpdateCvTitleComponent implements OnInit {

  @Input() catchCvId:number

  updateTitleForm:FormGroup
  cv:Cv

  constructor(private cvService:CvService,
    private toastrService:ToastrService,
    private formBuiler:FormBuilder) { }

  ngOnInit(): void {
    this.createUpdateTitleForm()
  }

  createUpdateTitleForm(){
    this.updateTitleForm=this.formBuiler.group({
      title:["",Validators.required]
    })
  }

  updateTitle(){
    this.cvService.updateCvTitle(this.cv,this.updateTitleForm.value["title"],this.catchCvId).subscribe((response:any)=>{
      this.toastrService.success("güncellendi")
      this.updateTitleForm.reset();
      setTimeout(()=>window.location.reload(),1000)
    })
  }



}
