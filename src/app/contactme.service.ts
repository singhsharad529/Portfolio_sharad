import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactmeService {

  constructor(private httpclient:HttpClient) { }

  sendMe(createResource){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpclient.post("http://localhost:3000/contactme",createResource,{headers:httpHeaders});

  }
}
