import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl: string = 'https://javareactcamp-hrms-backend.herokuapp.com/api/images';
  constructor(private httpClient: HttpClient) {}

upload(image: Image, userId: number): Observable<Image> {
  return this.httpClient.post<Image>(this.apiUrl + '/upload?userId=' + userId,image);
}

getImageById(id:number):Observable<Image>{
  return this.httpClient.get<Image>(this.apiUrl+"https://javareactcamp-hrms-backend.herokuapp.com/api/images/get/byId?imgId="+id)
}
}
