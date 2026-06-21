import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../services/auth/login.service';

export const authGuard: CanActivateFn = () => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.getToken()) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};