import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../servicios/login.service";
import { Router } from "@angular/router";
import { Login } from "../login/login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lg: LoginService,
    private router: Router
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      nombre: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  login() {
    this.lg
      .login(
        this.loginForm.controls["nombre"].value,
        this.loginForm.controls["password"].value
      )
      .subscribe((login: Login) => {
        sessionStorage.setItem("token", login.token);
        this.router.navigate(["/admin"]);
      });
  }
}
