import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelos/persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id).subscribe(data=>{
      this.persona = data;
    })
  }

  Actualizar(persona:Persona){
    this.service.editarPersona(persona).subscribe(data=>{
      this.persona=data;
      alert("Se actualizó con éxito!");
      this.router.navigate(['listar'])
    })
  }

}
