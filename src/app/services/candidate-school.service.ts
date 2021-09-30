import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  CandidateSchool } from '../models/candidate/candidate-school/candidateSchool';
import { SchoolListResponse } from '../models/school/schoolListResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"

  add(candidate:CandidateSchool){
    return this.httpClient.post(this.apiUrl + "/add",candidate)
  }

  getCandidatesByGradYear(sortDirection: number): Observable<SchoolListResponse> {
    return this.httpClient.get<SchoolListResponse>(this.apiUrl + '/get/byGradYear?sortDirection=' + sortDirection);
  }

  updateDepartment(candidate:CandidateSchool):Observable<SchoolListResponse>{
    return this.httpClient.put<SchoolListResponse>
    (this.apiUrl + "/update/department?candSchId=" + candidate.schoolId + "&departmentId=" + candidate.departmentId,candidate)
  }

  deleteById(schlId: number): Observable<CandidateSchool> {
    return this.httpClient.delete<CandidateSchool>(this.apiUrl + '/delete/byId?candSchId=' + schlId);
  }

}
