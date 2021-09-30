import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/cities/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/cities"

  constructor(private httpClient:HttpClient) { }

  getCities(){
    return this.httpClient.get(this.apiUrl +"/get/all");
  }

}