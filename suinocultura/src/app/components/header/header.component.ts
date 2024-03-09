import { Component, OnInit } from '@angular/core';
import { AutenticaService } from '../../services/autentica.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit{
    private inscricao!: Subscription;
    estaAutenticado = true;
  
    constructor(private autenticaService: AutenticaService, private rotas:Router, private route: ActivatedRoute) { }
  
  
    ngOnInit(): void {
      this.inscricao = this.autenticaService.usuario.subscribe(
        usuario => {
          this.estaAutenticado = !usuario ? false : true;
        });
      this.estaAutenticado = !this.autenticaService.usuario.value ? false : true;
      console.log(this.estaAutenticado);
    }
  
    ngOnDestroy(): void {
      this.inscricao.unsubscribe();
    }
  
    logout() {
      this.autenticaService.logout();
      console.log(this.autenticaService.logout());
      setTimeout(() => {
        this.rotas.navigate(['']);
       }, 1000);
    }
}
