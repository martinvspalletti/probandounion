import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GastosService } from "../servicios/gastos.service";
import { Gastos } from "./gastos";
import { Subscription } from "rxjs";

@Component({
  selector: "app-gastos",
  templateUrl: "./gastos.component.html",
  styleUrls: ["./gastos.component.css"],
})
export class GastosComponent implements OnInit, OnDestroy {
  datos: Gastos[] = [];
  suscription!: Subscription;
  mensaje = "";
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
    this.getAllGastos();
    /*this.suscription = this.gs.refresh.subscribe(() => {
      this.getAllGastos();
    });*/
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  getAllGastos() {
    this.gs.getAll().subscribe((datos) => {
      this.datos = datos;
    });
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
      .subscribe(() => (this.mensaje = "Actualizado con exito"));
  }
  delGasto(id: number) {
    this.gs
      .deleteGasto(id)
      .subscribe(() => (this.mensaje = "Eliminado con exito"));
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
