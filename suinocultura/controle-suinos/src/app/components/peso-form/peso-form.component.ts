import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PesoService } from '../../services/peso.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-peso-form',
  templateUrl: './peso-form.component.html',
  styleUrl: './peso-form.component.scss'
})
export class PesoFormComponent {
  pesoForm!: FormGroup;
  id:string = '';
 
  constructor(private formConstrutor: FormBuilder, private pesoService: PesoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this. pesoForm = this.formConstrutor.group({
      peso: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],  
      dataPeso: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getPeso(this.id);
  }

  // getPeso(id: any) {
  //   console.log("id-->"    + id);
  //   this.pesoService.getSuin(id).subscribe(responseData => {
  //     console.log(responseData);
  //     this.pesoForm.setValue(responseData);
  //   });
  // }

  getPeso(id: any) {
    console.log("id-->"    + id);
    this.pesoService.getSuin(id).subscribe(responseData => {
      console.log(responseData);
      if (responseData.hasOwnProperty('peso')) {
        this.pesoForm.patchValue({
          peso: responseData.peso,
          dataPeso: responseData.dataPeso
        });
      }
    });
  }
  
  get peso() {
    return this.pesoForm.get('peso')!;
  }

  // adicionarPeso(): void {
  //   if (this.pesoForm.invalid) {
  //     return;
  //   }
  //   console.log(this.pesoForm.value);
  //   this.pesoService.adicionarPesoSuino(this.pesoForm.value);         //metodo de adicionar criava uma nova tabela
  //   this.pesoForm.reset();
  // }
  adicionarPeso(): void {
    if (this.pesoForm.invalid) {
      return;
    }
    const idSuino = this.route.snapshot.paramMap.get('id')!;
    const pesoData = this.pesoForm.value;
    this.pesoService.adicionarPesoSuino(idSuino, pesoData);
    this.pesoForm.reset();
  }
  
}
