import { Component, OnInit } from '@angular/core';
import { AutenticaService } from '../../services/autentica.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../model/usuario.model'; // Certifique-se de importar o tipo Usuario

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Note a correção aqui para 'styleUrls'
})

export class HeaderComponent implements OnInit {
  private inscricao!: Subscription;

  estaAutenticado = true;

  constructor(private autenticaService: AutenticaService, private rotas: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.inscricao = this.autenticaService.usuario.subscribe(
      (usuario: Usuario) => { // Definindo o tipo do parâmetro 'usuario' como Usuario
      
      });
    this.estaAutenticado = !this.autenticaService.usuario.value ? false : true;
    console.log(this.estaAutenticado);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  logout() {
    this.estaAutenticado = false;
    
    console.log(this.autenticaService);
    setTimeout(() => {
      this.rotas.navigate(['']);
    }, 1000);
  }
}
