import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peso } from '../model/peso.model';
import { map, switchMap } from 'rxjs/operators';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})

export class PesoService {
  apiURL = 'https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

  // adicionarPesoSuino(idSuino: string, pesoData: { peso: number, dataPeso: string }) {
  //   const url = `https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${idSuino}/pesos.json`;
  //   return this.http.post(url, pesoData).subscribe(
  //     (response) => {
  //       console.log(response);
  //     }
  //   );
  // }

  adicionarPesoSuino(idSuino: string, pesoData: { peso: number, dataPeso: string }) {
    const url = `https://suinocultura-27005-default-rtdb.firebaseio.com/put/${idSuino}/pesos.json`;
    return this.http.post(url, pesoData).subscribe(
      (response) => {
        console.log("Tabela criada com sucesso:");
        console.log("ID do Suíno: " + idSuino);
        console.log("Peso: " + pesoData.peso);
        console.log("Data do Peso: " + pesoData.dataPeso);
      }
    );
}

  getPeso() {
    return this.http.get<{[key:string]: Peso}>('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json').pipe(
      map(responseData => {
        const listaArray: Peso[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            listaArray.push({ ...(responseData as any)[key], id: key });
          }
        }
        console.log(listaArray);
        return listaArray;
      })
    );
  }

  getSuin(id: string) {
    return this.http.get<Peso>(`https://suinocultura-27005-default-rtdb.firebaseio.com/put/${id}.json`);
  }

  // Método para obter os pesos de um suíno específico
  getPesosSuino(id: string) {
    return this.http.get<Peso[]>(`https://suinocultura-27005-default-rtdb.firebaseio.com/put/${id}/pesos.json`);
  }

  editarPeso(idSuino: string, PesoData: { peso: string; dataPeso: string; }) {
    // Recupera os dados do suíno para incluir na requisição PUT
    return this.getSuin(idSuino).pipe(
        switchMap(suinoData => {
            // Adiciona o novo peso aos pesos existentes
            const newData = { ...suinoData, pesos: [...suinoData.peso, PesoData] };
            // Executa a requisição PUT com os dados combinados
            return this.http.put(`https://suinocultura-27005-default-rtdb.firebaseio.com/put/${idSuino}.json`, newData, { observe: 'response' });
        })
    );
}




  
  
  

  getSuino2() {
    return this.http.get('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json', {
      params: new HttpParams().set('print', 'pretty')
    });
  }

  deletarPeso(id: string) {
    return this.http.delete(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
  }
}
