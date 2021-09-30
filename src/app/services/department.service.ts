import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/department/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/departments"

  getAll():Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.apiUrl + "/get/all")
  }

}