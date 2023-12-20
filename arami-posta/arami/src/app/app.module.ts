//module
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
//material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";

import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
//componentes
import { AppComponent } from "./app.component";
import { AdminComponent } from "./admin/admin.component";
import { PacientesComponent } from "./pacientes/pacientes.component";
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { EjerciciosComponent } from "./ejercicios/ejercicios.component";
import { FooterComponent } from "./footer/footer.component";
import { AddEjercicioComponent } from "./add-ejercicio/add-ejercicio.component";
import { LoginComponent } from "./login/login.component";
import { ListaPacientesComponent } from "./lista-pacientes/lista-pacientes.component";
import { GastosComponent } from "./gastos/gastos.component";
import { TurnosComponent } from "./turnos/TurnosComponent";
import { ComentariosComponent } from "./comentarios/comentarios.component";
import { ListacomentariosComponent } from "./listacomentarios/listacomentarios.component";
import { NavComponent } from "./nav/nav.component";
import { ErrorInterceptor } from "./interceptor/error.interceptor";
import { JwtInterceptor } from "./interceptor/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ListaPacientesComponent,
    AdminComponent,
    EjerciciosComponent,
    TurnosComponent,
    AddEjercicioComponent,
    GastosComponent,
    QuienesSomosComponent,
    ComentariosComponent,
    ListacomentariosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
