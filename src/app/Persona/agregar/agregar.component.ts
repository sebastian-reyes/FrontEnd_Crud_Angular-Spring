import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from '../../Modelos/persona'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  persona:Persona = new Persona();

  Guardar(){
    this.service.createPersonas(this.persona).subscribe(data=>{
      alert("Se agregó con éxito a "+this.persona.nombre+"!");
      this.router.navigate(["/listar"]);
    })
  }
}
