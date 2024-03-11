import { Component, OnInit } from '@angular/core';
import { Peso } from '../../model/peso.model';
import { PesoService } from '../../services/peso.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lista-peso',
  templateUrl: './lista-peso.component.html',
  styleUrls: ['./lista-peso.component.scss']
})
export class ListaPesoComponent  implements OnInit {
  loadedPesos: Peso[] = [];
  suinoId: string = '';

  constructor(private pesoService: PesoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtenha o ID do suíno da rota
    this.route.paramMap.subscribe(params => {
      this.suinoId = params.get('id') || '';
      this.getPesos();
    });
  }

  getPesos() {
    this.pesoService.getPesosSuino(this.suinoId).subscribe(responseData => {
      console.log(responseData);
      // Converter os valores do objeto em um array de objetos
      this.loadedPesos = Object.values(responseData);
      console.log("this.loadedPesos");
      console.log(this.loadedPesos);
    });
  }
  
  

  editarBilhete(id: any) {
    console.log(id);
  }

  deletarSuino(id: any) {
    this.pesoService.deletarPeso(id).subscribe(() => {
      console.log(id);
    });
  }
  editamovaPeso(id: any) {
    this.route.paramMap.subscribe(params => {
      this.suinoId = params.get('id') || '';
    });
    setTimeout(() => {
      this.rotas.navigate(['ep/' + id], { relativeTo: this.route });
     }, 2000);
  }
  // movaErro(){
  //   setTimeout(() => {
  //     this.rotas.navigate(['listarSuinos']);
  //   }, 2000);
  // }

}
