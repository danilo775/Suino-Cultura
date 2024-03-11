import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
}

)
export class ContatoComponent {
contatos: any;
enviar() {
throw new Error('Method not implemented.');
}
contatoForm: FormGroup<any> | undefined;

}



