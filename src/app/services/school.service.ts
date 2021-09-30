import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../models/school/school';


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/schools"


  getAll():Observable<School[]>{
    return this.httpClient.get<School[]>(this.apiUrl + "/get/all")
  }

}
