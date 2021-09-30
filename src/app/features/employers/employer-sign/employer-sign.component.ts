import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employer-sign',
  templateUrl: './employer-sign.component.html',
  styleUrls: ['./employer-sign.component.css']
})
export class EmployerSignComponent implements OnInit {

  constructor(private employerService:EmployerService,private formBuilder:FormBuilder,
    private toastrService:ToastrService,private userService:UserService) { }

  employerSignForm:FormGroup
  password:string=""
  verifyPassword:string=""
  checkEmail: boolean

  ngOnInit(): void {
    this.createEmployerAddForm()
  }

  createEmployerAddForm() {
    this.employerSignForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      website: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.minLength(6)]],
      verifyPassword:["",Validators.required],
      phoneNumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
    
  }

// addEmployer(){
//   if (this.employerSignForm.valid ) {  
//     if(this.checkPassword() && !this.checkEmail){
//       let employerModel = Object.assign({}, this.employerSignForm.value);
//     this.employerService.add(employerModel).subscribe((response) => {
//       this.toastrService.success("Kaydınız yapıldı.", employerModel.firstName)
//     })
//     }
// }else{
//   this.toastrService.error("formunuz eksik")
// }
 
// }

addEmployer() {
  if (this.employerSignForm.valid) {
    this.employerService.add(this.employerSignForm.value).subscribe(
      (response: any) => {
        this.toastrService.success(response.message,'Başarılı');
      },
      (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
    );
  } else {
    this.toastrService.error( 'Formunuz eksik', 'Dikkat!');
  }
}

checkPassword(){
  if(this.password===this.verifyPassword){
    return true;
  }else{
    this.toastrService.error("şifreler uyuşmuyor")
    return false;   
  }
}

checkByEmail() {
  this.userService.getByEmail(this.employerSignForm.value["email"]).subscribe((data: any) => {
    if (data.data == false) {
      this.checkEmail = false   
    } else {
      this.checkEmail = true
      this.toastrService.error("bu e posta kullanılıyor") 
    }
  })
}







}
