import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPosition } from '../models/jobPosition/jobPosition';

@Injectable({
  providedIn: 'root'
})
export class JobPositionService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/positions"


  constructor(private httpClient:HttpClient) { }


  getJobPositions():Observable<JobPosition[]>{
    return this.httpClient.get<JobPosition[]>(this.apiUrl + "/get/all")
  }

  getJobPositionAdd(jobPosition:JobPosition):Observable<JobPosition>{
    return this.httpClient.post<JobPosition>(this.apiUrl + "/add?positionTitle=" + jobPosition.title ,jobPosition )
  }


}
