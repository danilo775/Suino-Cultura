import { Component, OnInit } from '@angular/core';
import { Sessao } from '../../model/sessao.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SessaoService } from '../../services/sessao.service';

@Component({
  selector: 'app-lista-sessao',
  templateUrl: './lista-sessao.component.html',
  styleUrl: './lista-sessao.component.scss'
})
export class ListaSessaoComponent implements OnInit {
  loadedSessao:Sessao[] = [];
  filterTerm: string = ''; // Adicione uma variável para o termo de filtro
  Suinos: string[] = [];
  searchText: string = '';
  column: string = '';

  constructor(private bancoService:SessaoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSessao();
    this.carregarFiltros();
  }

  getSessao() {
    this.bancoService.getSessao().subscribe(responseData => {
      this.loadedSessao = responseData;
    });
  }

  // Adicione um novo método para obter suínos filtrados
  // getFilteredSuinos() {
  //   this.bancoService.getFilteredSessao(this.filterTerm).subscribe(responseData => {
  //     console.log(responseData);
  //     this.loadedSuinos = responseData;
  //     console.log(this.loadedSuinos);
  //   });
  // }

  editarBilhete(id:any){
    console.log(id);

  }


  deletarSessao(id:any){
    this.bancoService.deletarSessao(id).subscribe( () => {
      console.log(id);
      this.getSessao(); // Chama a função para recarregar os suínos após a exclusão
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
    this.Suinos = ['brincoAnimal', 'dataSessao', 'atividade', 'informacao'];
  }
}
