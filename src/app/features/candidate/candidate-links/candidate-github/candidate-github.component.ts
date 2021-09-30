import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-github',
  templateUrl: './candidate-github.component.html',
  styleUrls: ['./candidate-github.component.css']
})
export class CandidateGithubComponent implements OnInit {

  githubForm:FormGroup
  candidateId:any

  constructor(private formbuilder: FormBuilder,private candidateService:CandidateService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.createGithubForm()
    this.getCandidateId()
    
  }

  createGithubForm(){
    this.githubForm=this.formbuilder.group({
      candiateId:[this.getCandidateId()],
      githubAccount:["",Validators.required]
    })
  }

  add(){
    if(this.githubForm.valid){
      this.candidateService.addGithub(this.githubForm.value,this.getCandidateId()).subscribe((data:any)=>{
        this.pageReloadDelay()
        this.toastrService.success("Github hesabı eklendi")
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
        
      }
      )
    }
    else{
      this.toastrService.warning("Missing data")
    }
  }

  getCandidateId():any{
    this.candidateId=JSON.parse(localStorage.getItem("user"))
    console.log("2-"+this.candidateId.data.id)
    return this.candidateId.data.id
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }
}
