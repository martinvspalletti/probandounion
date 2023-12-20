import { Injectable } from "@angular/core";
import { Ejercicios } from "../add-ejercicio/addEjercicios";

@Injectable({
  providedIn: "root",
})
export class AddejercicioService {
  constructor() {}
  ejercicios: Ejercicios[] = [];
}
