import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const administrarGuard: CanActivateFn = () => {
  const router = inject(Router);
  if (sessionStorage.getItem("token")) {
    return true;
  }
  router.navigate(["/login"]);
  return false;
};
