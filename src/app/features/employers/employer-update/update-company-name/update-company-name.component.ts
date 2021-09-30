import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-update-company-name',
  templateUrl: './update-company-name.component.html',
  styleUrls: ['./update-company-name.component.css']
})
export class UpdateCompanyNameComponent implements OnInit {

  updatecompanyNameForm:FormGroup

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,
    private employerService: EmployerService) { }


  ngOnInit(): void {

    this.createUpdateForm()
   console.log( this.employerService.getEmployerId())

  }

  createUpdateForm(){
    this.updatecompanyNameForm=this.formBuilder.group({
      companyName:["",Validators.required],
      id:[this.employerService.getEmployerId()]
    })

  }

  updateCompanyName(){
    if(this.updatecompanyNameForm.valid){
      this.employerService.updateCompanyName(this.updatecompanyNameForm.value).subscribe((data:any)=>{
        this.toastrService.success("Request sent")
      },(responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      })
    }
    else{
      this.toastrService.warning("Missing Data")
    }
  }

}
