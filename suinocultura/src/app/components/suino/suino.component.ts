import { Component, OnInit } from '@angular/core';
import { BancoService } from '../../services/banco.service';
import { Suino } from '../../model/suino.model';
@Component({
  selector: 'app-suino',
  templateUrl: './suino.component.html',
  styleUrl: './suino.component.scss'
})
export class SuinoComponent  implements OnInit {
  loadedSuinos:Suino[] = [];
  constructor(private bancoService:BancoService) { }

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
    })
  }
  

}