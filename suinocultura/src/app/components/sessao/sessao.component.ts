import { Sessao } from './../../model/sessao.model';
import { Component } from '@angular/core';
import { SessaoService } from '../../services/sessao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-sessao',
  templateUrl: './sessao.component.html',
  styleUrl: './sessao.component.scss'
})
export class SessaoComponent {
  sessaoForm!: FormGroup;
  brincosSuinos: string[] = [];
  Sessao: string[] = [];

  constructor(private formConstrutor: FormBuilder, private servico: SessaoService, private bancoService:BancoService) { }

  ngOnInit() {
    this. sessaoForm = this.formConstrutor.group({
      brincoAnimal: ['', [Validators.required, Validators.email]],
      dataSessao: ['', Validators.required],
      atividade: ['', Validators.required],
      informacao: ['', Validators.required],
    });
    this.carregarAtividade();
    this.carregarBrincosSuinos();
  }

  carregarBrincosSuinos() {
    this.bancoService.getBrincosSuinos().subscribe(brincos => {
      this.brincosSuinos = brincos;
    });
  }
  adicionarSessao(): void {


    this.servico.adicionarSessao(this.sessaoForm.value);
    this.sessaoForm.reset();
  }

  carregarAtividade() {
    // Carrega as atividades disponíveis que você deseja usar
    this.Sessao = ['Raiva', 'Rinite Atrofica', 'brincoMae', 'Abate', 'Racao', 'comer', 'marcacao'];
  }
}
