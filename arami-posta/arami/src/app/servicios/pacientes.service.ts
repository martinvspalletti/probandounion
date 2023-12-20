import { Injectable } from "@angular/core";
import { Pacientes } from "../pacientes/pacientes";

@Injectable({
  providedIn: "root",
})
export class PacientesService {
  constructor() {}
  pac: Pacientes[] = [];
}
