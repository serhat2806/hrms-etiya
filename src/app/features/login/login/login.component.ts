import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm()
    
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required]

    })
  }

  login(){
    let user : User = this.loginForm.value;
    this.userService.getUser(user).subscribe(data=>{
      if(this.userExistsByLogin){
        this.toastrService.success("Sisteme giriş yapıldı.");
        localStorage.setItem("user",JSON.stringify(data))
      }else{
        this.toastrService.error("Kullanıcı bilgileri hatalı.")
      }
    })
  }



  userExistsByLogin(){
     this.userService.userExistsByLogin(this.loginForm.value).subscribe((data:any)=>{
       if(data.data== true){
          this.toastrService.success("giriş başarılı")
          return true
       }else{
         this.toastrService.error("bilgiler hatalı")
         return false
       }
     })
  }



}
