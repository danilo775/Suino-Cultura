import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sessao } from '../model/sessao.model';
import { AutenticaService } from './autentica.service';
import { map } from 'rxjs';

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
    getSessao() {
      return this.http.get<Sessao[]>(this.apiURL).pipe(
        map((responseData: any) => {
          const sessoesArray: Sessao[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              sessoesArray.push({ ...(responseData[key]), id: key });
            }
          }
          return sessoesArray;
        })
      );
    }

    deletarSessao(id: string) {
      return this.http.delete(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
    }

    editarSessao(id:string, SuinoData: {
                                            brincoAnimal: number;
                                            dataSessao: number;
                                            atividade: number;
                                            informacao: string;
                                        }
    ) {
    return this.http.put(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`, SuinoData, {observe: 'response'});
  }

  getSuino2() {
    return this.http.get('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json',
    {
      params: new HttpParams().set('print', 'pretty')
    }
  );
  }

  getFilteredSuino(filterTerm: string) {
// Construa o URL para filtragem corretamente usando "equalTo"
const filteredUrl = `${this.apiURL}?orderBy="status"&equalTo="${filterTerm}"`;

// Faça a solicitação HTTP
return this.http.get<Sessao[]>(filteredUrl);
}

getBrincosSessao() {
return this.http.get<{ [key: string]: any }>(this.apiURL).pipe(
  map(responseData => {
    const brincos: string[] = [];
    for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        brincos.push(responseData[key].brincoAnimal); // Supondo que 'brincoAnimal' seja o campo que contém o brinco do suíno
      }
    }
    return brincos;
  })
);
}

}

