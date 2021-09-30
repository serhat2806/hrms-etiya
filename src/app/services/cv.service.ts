import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';
import { Cv } from '../models/cv/cv';
import { CvListResponse } from '../models/cv/cvListResponse';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/cvs"

  add(cv:Cv):Observable<Cv[]>{
    return this.httpClient.post<Cv[]>(this.apiUrl + "/add",cv)
  }

  getById(id:number):Observable<CandidateListResponse>{
    return this.httpClient.get<CandidateListResponse>(this.apiUrl + "/get/byId?cvId=" + id)
  }

  getCvs():Observable<Cv>{
    return this.httpClient.get<Cv>(this.apiUrl+"/get/all");
  }

  updateCvTitle(cv: Cv, title: string, id: number): Observable<CvListResponse>{
    return this.httpClient.put<CvListResponse>(this.apiUrl + "/update/title?cvId=" + id + "&title=" + title, cv);
  }

  updateCvCoverLetter(cv: Cv, coverLetter: string, id: number): Observable<CvListResponse>{
    return this.httpClient.put<CvListResponse>(this.apiUrl + "/update/coverLetter?coverLetter=" + coverLetter + "&cvId=" + id, cv);
  }
  
}
