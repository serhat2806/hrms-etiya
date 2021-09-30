import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/language/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient:HttpClient) { }
  
  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/languages"

  getLanguages():Observable<Language[]>{
    return this.httpClient.get<Language[]>(this.apiUrl+"/get/all")
  }
}
