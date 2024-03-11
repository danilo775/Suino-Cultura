import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticaService } from '../services/autentica.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private autenticaService: AutenticaService, private router: Router) {}

  canActivate(): boolean {
    if (this.autenticaService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
