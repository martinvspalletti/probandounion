import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GastosService } from "../servicios/gastos.service";
import { Gastos } from "./gastos";

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"],
})
export class GastosComponent implements OnInit {
  datos: Gastos[] = [];

  gastosForm: FormGroup;
  private fb = inject(FormBuilder);
  private gs = inject(GastosService);
  constructor() {
    this.gastosForm = this.fb.group({
      id: [""],
      detalle: ["", Validators.required],
      importe: ["", Validators.required],
    });
  }
  ngOnInit() {
    this.gs.getAll().subscribe((datos) => (this.datos = datos));
  }

  agregarGasto() {
    this.gs
      .registrarGasto(
        0,
        this.gastosForm.controls["detalle"].value,
        this.gastosForm.controls["importe"].value
      )
      .subscribe();
  }

  actualizar(id: number) {
    const _id = this.datos.find((datos) => {
      return datos.id === id;
    });
    this.gs
      .updateGasto(
        this.gastosForm.controls["id"].value,
        this.gastosForm.controls["detalle"].value,
        this.gastosForm.controls["importe"].value
      )
      .subscribe();
    console.log(_id);
  }
  delGasto(id: number) {
    this.gs.deleteGasto(id).subscribe();
  }

  upGasto(id: number) {
    const gas = this.datos.find((datos) => {
      return datos.id === id;
    });
    this.gastosForm.patchValue({
      id: gas?.id,
      detalle: gas?.detalle,
      importe: gas?.importe,
    });
  }
}
