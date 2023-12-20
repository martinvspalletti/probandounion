import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatosService {
  profesionales: any[] = [
    {
      foto: "/assets/img/prof/prof1.png",
      prof: " Lic Mariana Rodriguez",
      titulo:
        "Terapeuta manual - kinesiologia - traumatologia deportiva - fisiokinesioterapia",
      mat: "Mat.1379/2",
      descripcion: "Realizo piripiri...",
    },

    {
      foto: "/assets/img/prof/prof2.png",
      prof: " Lic Mariana Rodriguez",
      titulo:
        "Terapeuta manual - kinesiologia - traumatologia deportiva - fisiokinesioterapia",
      mat: "Mat.1379/2",
      descripcion: "Realizo piripiri...",
    },
    {
      foto: "/assets/img/prof/prof3.png",
      prof: "Lic Sebastian Altamir",
      titulo:
        "Terapeuta manual - kinesiologia - traumatologia deportiva - fisiokinesioterapia",
      mat: "Mat.1379/3",
      descripcion: "Realizo piripiri...",
    },
  ];

  ob(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  get profesiones() {
    return [...this.profesionales];
  }

  constructor(private http: HttpClient) {}
}
