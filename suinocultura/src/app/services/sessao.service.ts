import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sessao } from '../model/sessao.model';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  apiURL = 'https://suinocultura-27005-default-rtdb.firebaseio.com/sessao.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

adicionarSessao(Sessao: {
                        brincoAnimal: string;
                        dataSessao: string;
                        atividade: string;
                        informacao: string;
                      }
                ){
    return this.http.post(this.apiURL, Sessao).subscribe(
      (response) => {
        console.log(response);
      }
    );
    }
}
