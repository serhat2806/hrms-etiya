import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-update-email-password',
  templateUrl: './update-email-password.component.html',
  styleUrls: ['./update-email-password.component.css']
})
export class UpdateEmailPasswordComponent implements OnInit {

  updateWebsiteAndEmailForm: FormGroup

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private employerService: EmployerService) { }

  ngOnInit(): void {

    this.createUpdateForm()
  }

  createUpdateForm() {
    this.updateWebsiteAndEmailForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      id: [this.employerService.getEmployerId()],
      website: ["", Validators.required]
    })
  }

  update() {
    if (this.updateWebsiteAndEmailForm.valid) {
      this.employerService.updateEmailAndWebsite(this.updateWebsiteAndEmailForm.value).subscribe((data: any) => {
        this.toastrService.success("Request sent")
      }, (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      })
    }
    else {
      this.toastrService.warning("Missing Data")
      console.log(this.updateWebsiteAndEmailForm)
    }
  }

}
