import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidate-sign',
  templateUrl: './candidate-sign.component.html',
  styleUrls: ['./candidate-sign.component.css']
})
export class CandidateSignComponent implements OnInit {

  checkNationalityId: boolean
  checkEmail: boolean
  password:string=""
  verifyPassword:string=""
  

  candidateSignForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService, private candidateService: CandidateService, private userService: UserService) { }

  ngOnInit(): void {
    this.createCandidateAddForm()

  }

  createCandidateAddForm() {
    this.candidateSignForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      verifyPassword:["",Validators.required],
      nationalityId: ["", [Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      birthYear: ["", Validators.required],
    })
  }

 
  addCandidate() {
    this.checkByNationalityId();
    this.checkByEmail();
    if (this.candidateSignForm.valid) {  
        if ( !this.checkEmail && !this.checkNationalityId && this.checkPassword() ) {
          let candidateModel = Object.assign({}, this.candidateSignForm.value);
          this.candidateService.add(candidateModel).subscribe((response) => {
            console.log(candidateModel)
            this.toastrService.success("Kaydınız yapıldı.", candidateModel.firstName)
          })
        }
      
      
    }
  }

  

  checkByNationalityId(){
    this.candidateService.getCandidatesByNationalityId(this.candidateSignForm.value["nationalityId"]).subscribe((data: any) => {
      if (data.data == false) {
        this.checkNationalityId = false

      } else {
        this.checkNationalityId = true
        this.toastrService.error("bu natinality id kullanılıyor")
      }
    })
  }

  checkByEmail() {
    this.userService.getByEmail(this.candidateSignForm.value["email"]).subscribe((data: any) => {
      if (data.data == false) {
        this.checkEmail = false   
      } else {
        this.checkEmail = true
        this.toastrService.error("bu e posta kullanılıyor") 
      }
    })
  }

  checkPassword(){
    if(this.password===this.verifyPassword){
      return true;
    }else{
      this.toastrService.error("şifreler uyuşmuyor")
      return false;   
    }
}
}

