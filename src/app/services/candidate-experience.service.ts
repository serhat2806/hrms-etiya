import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateExperience } from '../models/candidate/candidate-experience/candidateExperience';
import { CandidateJobExperienceListResponse } from '../models/candidate/candidate-experience/candidateExperienceList';

@Injectable({
  providedIn: 'root'
})
export class CandidateExperienceService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences"


  add(candidateExperience:CandidateExperience){
    return this.httpClient.post(this.apiUrl + "/add",candidateExperience)
  }

  getCandidatesByQuitYear(sortDirection: number): Observable<CandidateJobExperienceListResponse> {
    return this.httpClient.get<CandidateJobExperienceListResponse>(
      this.apiUrl + '/get/byQuitYear?sortDirection=' + sortDirection
    );
  }

  deleteById(jobExpId: number,): Observable<CandidateExperience> {
    return this.httpClient.delete<CandidateExperience>(this.apiUrl + '/delete/byId?candJobExpId=' + jobExpId);
  }
}
