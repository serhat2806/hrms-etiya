import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/models/cv/cv';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-update-cv-letter',
  templateUrl: './update-cv-letter.component.html',
  styleUrls: ['./update-cv-letter.component.css']
})
export class UpdateCvLetterComponent implements OnInit {

  updateCoverLetterForm:FormGroup
  cv:Cv

  @Input() catchCvId:number

  constructor(private cvService:CvService,
    private toastrService:ToastrService,
    private formBuiler:FormBuilder) { }

  ngOnInit(): void {
    this.createUpdateCoverLetterForm()
  }

  createUpdateCoverLetterForm(){
    this.updateCoverLetterForm=this.formBuiler.group({
      coverLetter:["",Validators.required]
    })
  }

  updateCoverLetter(){
    this.cvService.updateCvCoverLetter(this.cv,this.updateCoverLetterForm.value["coverLetter"],this.catchCvId).subscribe((response:any)=>{
      this.toastrService.success("güncellendi")
      this.updateCoverLetterForm.reset();
      setTimeout(()=>window.location.reload(),1000)
    })
  }


}
