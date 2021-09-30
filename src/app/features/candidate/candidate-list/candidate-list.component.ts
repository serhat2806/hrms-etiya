import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidateAddForm: FormGroup
  loading:boolean=true
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,private candidateService:CandidateService) { }

    candidates:Candidate[]=[]

  ngOnInit(): void {

    this.getCandidates()
    
  }

  getCandidates(){
    this.candidateService.getCandidates().subscribe((data:any)=>{
      this.candidates=data.data
      this.loading=false
    })
  }

  
  }
