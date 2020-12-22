import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  getProjects(){

    return this.httpClient.get("http://localhost:3000/projects");

   }

}
