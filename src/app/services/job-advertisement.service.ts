import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from '../models/job-advertisement/jobAdvertisement';
import { JobAdvertisementListResponse } from '../models/job-advertisement/jobAdvertisementListResponse';

@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements"

  constructor(private httpClient:HttpClient) { }


  add(jobAdvertisement:JobAdvertisement):Observable<JobAdvertisement>{
    return this.httpClient.post<JobAdvertisement>(this.apiUrl+"/add",jobAdvertisement)
  }

  getAll(){
    return this.httpClient.get<JobAdvertisement>(this.apiUrl+"/get/all")
  }

  getJobsByActive(){
    return this.httpClient.get(this.apiUrl + "/get/active")
  }

  getActiveJobByDate(){
    return this.httpClient.get(this.apiUrl + "/get/activeVerifiedByCreatedAt")
  }

  getActiveJobByEmployer(){
    return this.httpClient.get(this.apiUrl + "/get/byEmployer")
  }

  closeJobAdvertisement(jobAdvertisement:JobAdvertisement):Observable<JobAdvertisement>{
    return this.httpClient.put<JobAdvertisement>
    (this.apiUrl + "/update/activation?jobAdvId=" + jobAdvertisement.id + "&status=" + !jobAdvertisement.active,jobAdvertisement )
  }

  getUnverifiedJobAdverts(sortDirection: number):Observable<JobAdvertisementListResponse[]> {
    return this.httpClient.get<JobAdvertisementListResponse[]>(this.apiUrl + '/get/unverified?sortDirection=' + sortDirection);
  }

  changeVerificationJobAdverts(jobAdvertisement: JobAdvertisement): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>
    (this.apiUrl +'/update/verification?jobAdvId=' +jobAdvertisement.id +'&status=' +!jobAdvertisement.verified,jobAdvertisement
    );
  }

  
  updateJobAdvertisementVerification(jobAdvertisement: JobAdvertisement, id: number): Observable<JobAdvertisement> {
    return this.httpClient.put<JobAdvertisement>(this.apiUrl + "/update/verification?jobAdvId=" + id + "&status=" + !jobAdvertisement.verified, jobAdvertisement);
  }
}