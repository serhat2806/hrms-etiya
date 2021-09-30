import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/skills"

  getAll():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.apiUrl+ "/get/all")
  }
}
