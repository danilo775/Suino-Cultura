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
  Suinos: string[] = [];
  searchText: string = '';
  column: string = '';

  constructor(private bancoService:BancoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSuinos();
    this.carregarFiltros();
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
  onSelectChange(event: any) {
    this.column = event.target.value; // Atualiza collum com o valor da opção selecionada

    console.log(event.target.value); // Aqui você pode lidar com a seleção do filtro
  }

  carregarFiltros() {
    // Carrega os filtros disponíveis, substitua 'Suinos' com os filtros reais que você deseja usar
    this.Suinos = ['brincoAnimal', 'brincoPai', 'brincoMae', 'dataNascimento', 'dataSaida', 'status', 'sexo'];
  }
}
