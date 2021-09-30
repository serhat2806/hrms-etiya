import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from '../models/employer/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/employers"

  constructor(private httpClient:HttpClient) { }

  add(employer:Employer){
    return this.httpClient.post(this.apiUrl + "/add",employer)
  }

  getEmployers():Observable<Employer[]>{ 
    return this.httpClient.get<Employer[]>(this.apiUrl+"/get/all")
  }

  getEmployerId():any{
    return JSON.parse(localStorage.getItem('user')).data.id
  }

  getEmployerById(id:number):Observable<Employer>{
    return this.httpClient.get<Employer>(this.apiUrl+"/get/byId?emplId="+id)
  }

  updateCompanyName(employer:Employer){
    return this.httpClient.put(this.apiUrl+"update/companyName?companyName="+employer.companyName+"&emplId="+employer.id,employer)
  }

  updateEmailAndWebsite(employer:Employer){
    return this.httpClient.put(this.apiUrl+"update/emailAndWebsite?email="+employer.email+"&emplId="+employer.id+"&website="+employer.website,employer)
  }

  updatePhoneNumber(employer:Employer){
    return this.httpClient.put(this.apiUrl+"update/phoneNumber?emplId="+employer.id+"&phoneNumber="+employer.phoneNumber,employer)
  }

  updateVerificaiton(employe:Employer){
    return this.httpClient.put(this.apiUrl+"update/verification?emplId="+employe.id+"&status="+employe.verified,employe)
  }



}
