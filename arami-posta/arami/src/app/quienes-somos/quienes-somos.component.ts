import { Component } from "@angular/core";
import { DatosService } from "../servicios/datos.service";

@Component({
  selector: "app-quienes-somos",
  templateUrl: "./quienes-somos.component.html",
  styleUrls: ["./quienes-somos.component.css"],
})
export class QuienesSomosComponent {
  constructor(private datosService: DatosService) {}

  get profesiones() {
    return this.datosService.profesiones;
  }
}
