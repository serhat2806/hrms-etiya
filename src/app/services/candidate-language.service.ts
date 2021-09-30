import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateLanguage } from '../models/candidate/candidate-language/candidateLanguage';

@Injectable({
  providedIn: 'root'
})
export class CandidateLanguageService {

  

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/candidateLanguages"

  constructor(private httpClient:HttpClient) { }

   add(language:CandidateLanguage):Observable<CandidateLanguage[]>{
    return this.httpClient.post<CandidateLanguage[]>(this.apiUrl+"/add",language)
  }

  deleteById(langId: number): Observable<CandidateLanguage> {
    return this.httpClient.delete<CandidateLanguage>(this.apiUrl + '/delete/byId?CandLangId=' + langId );
  }
}
