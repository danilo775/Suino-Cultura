import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PesoService } from '../../services/peso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';


@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.component.html',
  styleUrl: './editar-peso.component.scss'
})
export class EditarPesoComponent {
  pesoForm!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;

  get peso() {
    return this.pesoForm.get('peso')!;
  }
  /*
   constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  */

  constructor(private formConstrutor: FormBuilder, private pesoService: PesoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this. pesoForm = this.formConstrutor.group({
      peso: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      dataPeso: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getPeso(this.id);
    console.log(this.id);
  }


  getPeso(id: any) {
    console.log("ID do peso:", id); // Verifica o ID do peso
    this.pesoService.getSuin(id).subscribe(responseData => {
      console.log("Dados do peso recebidos:", responseData); // Verifica os dados do peso recuperados do serviço
      if (responseData.hasOwnProperty('peso')) {
        this.pesoForm.patchValue({
          peso: responseData.peso,
          dataPeso: responseData.dataPeso
        });
      }
    });
  }


  salvarPeso() {
    console.log("salvar Peso: " + this.pesoForm.value);
    this.pesoService.editarPeso(this.id, this.pesoForm.value).subscribe(response => {
        if (response.status === 200) {
            this.editadoSucesso = true;
            this.rediracionaPrincipal();
        } else {
            console.error("Erro ao editar o peso: ", response);
        }
    }, error => {
        console.error("Erro ao editar o peso: ", error);
    });
}

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listarSuinos']);
    }, 2000);

  }
}
