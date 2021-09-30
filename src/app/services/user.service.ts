import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/users"

  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string){
    return this.httpClient.get(this.apiUrl + "/exists/byEmail?email=" + email)
  }

  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl )
  }

  getUser(user:User):Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl + "/login?email="+user.email+ "&password="+user.password )
  }

  userExistsByLogin(user:User):Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl + "/exists/byEmailAndPW?email="+user.email+ "&password="+user.password )
  }

  getEmployer():any{
    return JSON.parse(localStorage.getItem('user')).data

  }
}




