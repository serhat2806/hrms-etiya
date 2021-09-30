import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee-last-name',
  templateUrl: './update-employee-last-name.component.html',
  styleUrls: ['./update-employee-last-name.component.css']
})
export class UpdateEmployeeLastNameComponent implements OnInit {

  hrmsLastNameUpdateForm: FormGroup
  userId: any
  constructor(private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,) { }

  ngOnInit(): void {

    this.getCandidataId()
    this.createUpdateFirstName()

  }

  createUpdateFirstName() {
    this.hrmsLastNameUpdateForm = this.formBuilder.group({

      lastName: ["", Validators.required],
      id: [this.getCandidataId()]
    })
    console.log("forma giriyor")
  }


  getCandidataId(): any {
    this.userId = JSON.parse(localStorage.getItem("user"))
    console.log(this.userId.data.id)
    return this.userId.data.id
  }


  updateLastName() {
    console.log("giriş")
    console.log(this.hrmsLastNameUpdateForm.value)
    if (this.hrmsLastNameUpdateForm.valid) {
      this.employeeService.updateEmployeeLastName(this.hrmsLastNameUpdateForm.value, this.getCandidataId()).subscribe((data: any) => {
        this.toastrService.success("Güncellendi")
        console.log("12-" + this.hrmsLastNameUpdateForm.value)
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

  }

}
