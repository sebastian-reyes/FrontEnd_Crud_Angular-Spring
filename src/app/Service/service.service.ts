import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelos/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }
  url= 'http://localhost:9898/rest_personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  createPersonas(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url,persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.url+"/"+id);
  }

  editarPersona(persona:Persona){
    return this.http.put<Persona>(this.url,persona);
  }

}
