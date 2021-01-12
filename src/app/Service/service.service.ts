import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  url= 'http://localhost:9898/rest_personas';
  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }
}
