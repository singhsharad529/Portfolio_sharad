import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private httpClient:HttpClient) { }

 getExperience(){

  return this.httpClient.get("http://localhost:3000/experience");

 }

}
