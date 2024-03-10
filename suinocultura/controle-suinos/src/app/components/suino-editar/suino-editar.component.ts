import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BancoService } from '../../services/banco.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suino-editar',
  templateUrl: './suino-editar.component.html',
  styleUrls: ['./suino-editar.component.scss']
})
export class SuinoEditarComponent {
  bilheteSuinoForm!: FormGroup;
  id:string = '';
  editadoSucesso:boolean = false;

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

  constructor(private formConstrutor: FormBuilder, private bancoService:BancoService, private rotas:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this. bilheteSuinoForm = this.formConstrutor.group({
      brincoAnimal: ['', Validators.required],
      brincoPai: ['', Validators.required],
      brincoMae: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      sexo: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getSuino(this.id);
  }

 
   getSuino(id: any) {
    console.log("id-->"    + id);
    this.bancoService.getSuin(id).subscribe(responseData => {
      console.log(responseData);
      this.bilheteSuinoForm.setValue(responseData);
    });
  }

  salvarSuino() {
    console.log("salvar Suino: " + this.bilheteSuinoForm.value);
    this.bancoService.editarSuino(this.id, this.bilheteSuinoForm.value).subscribe(responseData => {
      if(responseData.status == 200){
        this.editadoSucesso = true;
        this.rediracionaPrincipal();
      }
    });
  }

  rediracionaPrincipal(){
    setTimeout(() => {
     this.rotas.navigate(['listarSuinos']);
    }, 2000);
    
  }

}
