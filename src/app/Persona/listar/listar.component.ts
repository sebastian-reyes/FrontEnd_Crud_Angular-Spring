import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[] = [];
  constructor(private http:ServiceService, private router:Router) { }

  ngOnInit(): void{
    this.http.getPersonas().subscribe(data=>{
      this.personas=data;
    })
  }

}
