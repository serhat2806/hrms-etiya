import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-job-advert-verify',
  templateUrl: './job-advert-verify.component.html',
  styleUrls: ['./job-advert-verify.component.css']
})
export class JobAdvertVerifyComponent implements OnInit {

  updateForm:FormGroup

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private employerService: EmployerService) { }

  ngOnInit(): void {
    this.createUpdateForm()
  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      id: [this.employerService.getEmployerId()],
      verified: ["", Validators.required]
    })
  }

  
  update() {
    if (this.updateForm.valid) {
      this.employerService.updateVerificaiton(this.updateForm.value).subscribe((data: any) => {
        this.toastrService.success("Request sent")
      }, (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
      )
    }
    else {
      this.toastrService.warning("Missing Data")
    }
  }

  

}
