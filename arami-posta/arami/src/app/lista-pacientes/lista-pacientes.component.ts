import { Component } from "@angular/core";

export interface Pacientes {
  nombre: string;
  apellido: string;
  dni: number;
  telefono: number;
}
@Component({
  selector: "app-lista-pacientes",
  templateUrl: "./lista-pacientes.component.html",
  styleUrls: ["./lista-pacientes.component.css"],
})
export class ListaPacientesComponent {
  listaPacientes: Pacientes[] = [
    {
      nombre: "pepito",
      apellido: "del barrio",
      dni: 3333,
      telefono: 55555,
    },
    {
      nombre: "juan",
      apellido: "pepe",
      dni: 434343,
      telefono: 787878,
    },
    {
      nombre: "pepito",
      apellido: "del barrio",
      dni: 3333,
      telefono: 55555,
    },
  ];
}
