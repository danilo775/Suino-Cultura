import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../services/banco.service';

@Component({
  selector: 'app-suino-form',
  templateUrl: './suino-form.component.html',
  styleUrl: './suino-form.component.scss'
})
export class SuinoFormComponent {
  suinoForm!: FormGroup;
 
  constructor(private formConstrutor: FormBuilder, private servico: BancoService) { }

  ngOnInit() {
    this. suinoForm = this.formConstrutor.group({
      brincoAnimal: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      brincoPai: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      brincoMae: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  }
  get brincoAnimal() {
    return this.suinoForm.get('brincoAnimal')!;
  }

  get brincoPai() {
    return this.suinoForm.get('brincoPai')!;
  }

  get brincoMae() {
    return this.suinoForm.get('brincoMae')!;
  }

  get dataNascimento() {
    return this.suinoForm.get('dataNascimento')!;
  }

  get dataSaida() {
    return this.suinoForm.get('dataSaida')!;
  }

  get status() {
    return this.suinoForm.get('status')!;
  }

  adicionarSuino(): void {
    if (this.suinoForm.invalid) {
      return;
    }
    console.log(this.suinoForm.value);
    this.servico.adicionarSuino(this.suinoForm.value);
    this.suinoForm.reset();
  }
}
