import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { LoginComponent } from "./login/login.component";
import { GastosComponent } from "./gastos/gastos.component";
import { AddEjercicioComponent } from "./add-ejercicio/add-ejercicio.component";
import { ListaPacientesComponent } from "./lista-pacientes/lista-pacientes.component";
import { TurnosComponent } from "./turnos/TurnosComponent";
import { EjerciciosComponent } from "./ejercicios/ejercicios.component";
import { ListacomentariosComponent } from "./listacomentarios/listacomentarios.component";
import { administrarGuard } from "./guard/administrar.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "turnos", component: TurnosComponent },
  { path: "quienes-somos", component: QuienesSomosComponent },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "gastos", component: GastosComponent },
      { path: "gastos/:id", component: GastosComponent },
      { path: "addejercicio", component: AddEjercicioComponent },
      { path: "listapacientes", component: ListaPacientesComponent },
      { path: "turnospacientes", component: TurnosComponent },
      { path: "ejerciciospacientes", component: EjerciciosComponent },
      { path: "addPacientes", component: PacientesComponent },
      { path: "listaComentarios", component: ListacomentariosComponent },
    ],
    canActivate: [administrarGuard],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
