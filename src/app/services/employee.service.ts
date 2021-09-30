import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee/employee';
import { Employer } from '../models/employer/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    
  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/"


apiurl1:string="https://javareactcamp-hrms-backend.herokuapp.com/api/employers/"
  
  constructor(private httpClient:HttpClient) { }



  updateEmployeeFirstName(employee:Employee,id:number){
    return this.httpClient.put(this.apiUrl+"update/firstName?firstName="+employee.firstName+"&sysEmplId="+id,employee)
  }      
  updateEmployeeLastName(employee:Employee,id:number){
    console.log("adada")
    return this.httpClient.put(this.apiUrl+"update/lastName?lastName="+employee.lastName+"&sysEmplId="+id,employee)
  }

  applyChange(employer:Employer){
    return this.httpClient.put(this.apiurl1+"update/applyChanges?emplId="+employer.id,employer)
  }
}
