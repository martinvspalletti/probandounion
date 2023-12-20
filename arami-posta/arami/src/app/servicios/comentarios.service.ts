import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comentarios } from "../comentarios/comentarios";

@Injectable({
  providedIn: "root",
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Comentarios[]> {
    return this.http.get<Comentarios[]>("https://jsonplaceholder.typicode.com/users");
  }
}
