import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { Suino } from '../../model/suino.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suino',
  templateUrl: './suino.component.html',
  styleUrl: './suino.component.scss'
})
export class SuinoComponent  implements OnInit {
  loadedSuinos:Suino[] = [];
  filterTerm: string = ''; // Adicione uma variável para o termo de filtro

  constructor(private bancoService:BancoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSuinos();
  }

  getSuinos() {
    this.bancoService.getSuino().subscribe(responseData => {
      console.log(responseData);
      this.loadedSuinos = responseData;
      console.log(this.loadedSuinos);
    });
  }

  // Adicione um novo método para obter suínos filtrados
  getFilteredSuinos() {
    this.bancoService.getFilteredSuino(this.filterTerm).subscribe(responseData => {
      console.log(responseData);
      this.loadedSuinos = responseData;
      console.log(this.loadedSuinos);
    });
  }

  editarBilhete(id:any){
    console.log(id);

  }

  apagarTudo(){
    this.bancoService.apagarTodosSuinos().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedSuinos = [];
    });
  }
  deletarSuino(id:any){
    this.bancoService.deletarSuino(id).subscribe( () => {
      console.log(id);
      this.getSuinos(); // Chama a função para recarregar os suínos após a exclusão
    })
  }
  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listarSuinos']);
    }, 2000);
    
  }
  
}