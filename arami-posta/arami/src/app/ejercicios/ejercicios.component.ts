import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export interface PacienteEjercicio {
  apellido: string;
  ejercicio: string;
  cantidad: number;
  repeticion: number;
}
@Component({
  selector: "app-ejercicios",
  templateUrl: "./ejercicios.component.html",
  styleUrls: ["./ejercicios.component.css"],
})
export class EjerciciosComponent {
  ejerciciosPacientesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.ejerciciosPacientesForm = this.fb.group({
      apellido: ["", Validators.required],
      ejercicio: ["", Validators.required],
      cantidad: ["", Validators.required],
      repeticion: ["", Validators.required],
    });
  }
  pacienteEjercicios: PacienteEjercicio[] = [
    {
      apellido: "pepito",
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
    {
      apellido: "pepito",
      ejercicio: "sentadillas",
      cantidad: 10,
      repeticion: 3,
    },
  ];

  agregarEjercicioPaciente() {}
}
