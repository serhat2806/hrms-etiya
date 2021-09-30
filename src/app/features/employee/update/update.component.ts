import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  hrmsFirstNameUpdateForm:FormGroup
  hrmsLastNameUpdateForm: FormGroup
  userId: any

  
  constructor(private employeeService:EmployeeService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getCandidataId()
    this.createUpdateFirstName()


  }

  createUpdateFirstName(){
    this.hrmsFirstNameUpdateForm=this.formBuilder.group({
      
      firstName:["",Validators.required],
      id:[this.getCandidataId()]
    })
    console.log("forma giriyor")
  }

 

  updateFirstName(){
    console.log("giriş")
    console.log(this.hrmsFirstNameUpdateForm.value)
    if(this.hrmsFirstNameUpdateForm.valid){
      this.employeeService.updateEmployeeFirstName(this.hrmsFirstNameUpdateForm.value,this.getCandidataId()).subscribe((data:any)=>{
        this.toastrService.success("Güncellendi")
        console.log("12-"+this.hrmsFirstNameUpdateForm.value)
        console.log(this.getCandidataId())
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

 
  
  getCandidataId():any{
    this.userId=JSON.parse(localStorage.getItem("user"))
    console.log(this.userId.data.id)
    return this.userId.data.id
  }
  


}
