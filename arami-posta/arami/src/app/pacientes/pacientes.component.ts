import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Pacientes } from "./pacientes";
import { PacientesService } from "../servicios/pacientes.service";

@Component({
  selector: "app-pacientes",
  templateUrl: "./pacientes.component.html",
  styleUrls: ["./pacientes.component.css"],
})
export class PacientesComponent {
  pacienteForm: FormGroup;
  private fb = inject(FormBuilder);
  private ps = inject(PacientesService);

  constructor() {
    this.pacienteForm = this.fb.group({
      ob: ["", Validators.required],
      prof: ["", Validators.required],
      dni: ["", Validators.required],
      cel: ["", Validators.required],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
    });
  }

  agregarPaciente() {
    const pacientes = new Pacientes(
      this.pacienteForm.get("ob")?.value,
      this.pacienteForm.get("prof")?.value,
      this.pacienteForm.get("dni")?.value,
      this.pacienteForm.get("cel")?.value,
      this.pacienteForm.get("nombre")?.value,
      this.pacienteForm.get("apellido")?.value
    );
    this.ps.pac.push(pacientes);
  }
  get pacientes() {
    return this.ps.pac;
  }
}
