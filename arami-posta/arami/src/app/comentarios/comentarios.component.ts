import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Comentarios } from "./comentarios";
import { ComentariosService } from "../servicios/comentarios.service";
@Component({
  selector: "app-comentarios",
  templateUrl: "./comentarios.component.html",
  styleUrls: ["./comentarios.component.css"],
})
export class ComentariosComponent implements OnInit {

comentarios: Comentarios[] = []
  comentariosForm: FormGroup;
  private fb = inject(FormBuilder);
  constructor(private cs:ComentariosService) {
    this.comentariosForm = this.fb.group({
      nombre: ["", Validators.required],
      detalle: ["", Validators.required],
    });
  }
  ngOnInit() {
    this.cs.getAll().subscribe((comentarios) => this.comentarios = comentarios)
  }

  addComentario() {}
}
