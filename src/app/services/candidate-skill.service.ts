import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateSkill } from '../models/candidate/candidate-skill/candidateSkill';

@Injectable({
  providedIn: 'root'
})
export class CandidateSkillService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSkills"


  add(candidateSkill:CandidateSkill):Observable<CandidateSkill[]>{
    return this.httpClient.post<CandidateSkill[]>(this.apiUrl+ "/add", candidateSkill)
  }

  deleteById(skillId: number): Observable<CandidateSkill> {
    return this.httpClient.delete<CandidateSkill>(this.apiUrl + '/delete/byId?candSkillId=' + skillId);
  }
}
