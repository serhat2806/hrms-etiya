import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-linkedin',
  templateUrl: './candidate-linkedin.component.html',
  styleUrls: ['./candidate-linkedin.component.css']
})
export class CandidateLinkedinComponent implements OnInit {

  linkedForm:FormGroup
  candidateId:any
  cv:Cv[]=[]
  loggedCandidate:any
  loading:boolean=true

  constructor(private candidateService:CandidateService,
    private formbBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.createLinkedForm()
    this.getCandidateId()
    this.getCandidateLinkedin()

  }

  createLinkedForm(){
    this.linkedForm=this.formbBuilder.group({
      candidateId:[ this.getCandidateId()],
      linkedInAccount:["",Validators.required]
    })
  }

  add(){
    if(this.linkedForm.valid){
      this.candidateService.addLinked(this.linkedForm.value, this.getCandidateId()).subscribe((data:any)=>{
        this.pageReloadDelay()
        this.toastrService.success("Linked hesabı eklendi")

      },(dataError)=>{
        let message=JSON.stringify(dataError.error.data.error);

        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
      )
    }
    else{
      this.toastrService.warning("Missing Data")
    }
  }

  getCandidateId():any{
    this.candidateId=JSON.parse(localStorage.getItem("user"))
    return this.candidateId.data.id
  }

  getCandidateLinkedin():any{
    this.candidateService.getCandidateById(this.getCandidateId()).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      this.cv=response.data.cvs;
      this.loading = false;
    });
  }


  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

}
