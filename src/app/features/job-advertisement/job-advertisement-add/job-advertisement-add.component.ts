import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { workTimes } from 'src/app/models/candidate/workTime';
import { workTypes } from 'src/app/models/candidate/workTypes';
import { City } from 'src/app/models/cities/city';
import { Employer } from 'src/app/models/employer/employer';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobPosition } from 'src/app/models/jobPosition/jobPosition';
import { CitiesService } from 'src/app/services/cities.service';
import { EmployerService } from 'src/app/services/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-job-advertisement-add',
  templateUrl: './job-advertisement-add.component.html',
  styleUrls: ['./job-advertisement-add.component.css']
})
export class JobAdvertisementAddComponent implements OnInit {

  jobAdvertisementForm: FormGroup
  positions: JobPosition[] = []
  cities: City[] = []
  employers: Employer[] = []
  workModels=workTypes
  workTimes=workTimes
  // workTypes: JobAdvertisement[]=[]

  constructor(private formBuilder: FormBuilder,
    private citiesService: CitiesService,
    private jobPositionService: JobPositionService,
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService,
    private employerService: EmployerService
  ) { }

  ngOnInit(): void {
    this.createJobAdvertisementFrom();
    this.getJobPositions()
    this.getCities()
    this.getEmployers()
    // this.getWorkTypes()
  }

  createJobAdvertisementFrom() {
    this.jobAdvertisementForm = this.formBuilder.group({
      cityId: ["", Validators.required],
      deadline: ["", Validators.required],
      employerId: ["", Validators.required],
      jobDescription: ["", Validators.required],
      maxSalary: [""],
      minSalary: [""],
      openPositions: ["", Validators.required],
      positionId: ["", Validators.required],
      workModel: ["", Validators.required],/// hybrid
      workTime: ["", Validators.required],///part-time
    })
  }
  add() {
    if (this.jobAdvertisementForm.valid) {
      this.jobAdvertisementService.add(this.jobAdvertisementForm.value).subscribe(
        (response: any) => {
          this.toastrService.success('Başarılı');
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
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  getJobPositions() {
    this.jobPositionService.getJobPositions().subscribe((data: any) => {
      this.positions = data.data
      console.log(this.positions)
    })
  }

  getCities() {
    this.citiesService.getCities().subscribe((data: any) => {
      this.cities = data.data
      console.log(this.cities)
    })
  }

  getEmployers() {
    this.employerService.getEmployers().subscribe((data: any) => {
      this.employers = data.data
    })
  }

}