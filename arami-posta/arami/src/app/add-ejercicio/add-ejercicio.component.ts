import { Component, inject } from "@angular/core";
import { Ejercicios } from "./addEjercicios";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddejercicioService } from "../servicios/addejercicio.service";

@Component({
  selector: "app-add-ejercicio",
  templateUrl: "./add-ejercicio.component.html",
  styleUrls: ["./add-ejercicio.component.css"],
})
export class AddEjercicioComponent {
  crearEjercicio: FormGroup;
  private fb = inject(FormBuilder);
  private aes = inject(AddejercicioService);
  constructor() {
    this.crearEjercicio = this.fb.group({
      nombre: ["", Validators.required],
    });
  }

  ejer: Ejercicios = new Ejercicios();
  //revisar - que hago con el id ???
  addEjercicio() {
    this.ejer = this.crearEjercicio.value;
    this.aes.ejercicios.push(this.ejer);
    this.ejer = new Ejercicios();
    //return [...this.ejercicios];
  }

  
  editar(ejercicio: Ejercicios) {
    this.ejer = ejercicio;
    console.log((this.ejer = ejercicio));
    this.ejer = new Ejercicios();
    
  }

  //revisar - borra todos los elementos
  del() {
    /* this.aes.ejercicios = this.aes.ejercicios.filter(
      (x) => x.id_ != this.ejer.id_
    );

    this.ejer = new Ejercicios();*/
  }

  get ejercicios() {
    return this.aes.ejercicios;
  }
}
