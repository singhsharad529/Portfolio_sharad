import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TraininginfoService {

  constructor(private httpClient:HttpClient) { }

  getTrainings(){

    return this.httpClient.get("http://localhost:3000/trainings");

   }

   
  
}
