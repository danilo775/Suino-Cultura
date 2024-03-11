import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Suino } from '../model/suino.model';
import { exhaustMap, map, take } from 'rxjs';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})

export class BancoService {

  apiURL = 'https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

adicionarSuino(Suino: {    
                          brincoAnimal: number;
                          brincoPai: number;
                          brincoMae: number;
                          dataNascimento: string;
                          dataSaida: string;
                          status: string;
                          sexo: string;
                      }
                ){
    return this.http.post(this.apiURL, Suino).subscribe(
      (response) => {
        console.log(response);
      }
    );
    }

    getSuino() {
        return this.http.get<{[key:string]: Suino}>('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json').pipe(
          map( (responseData) => {
            const listaArray:Suino[] = [];
            for (const key in responseData) {
                if ((responseData).hasOwnProperty(key)){
                  listaArray.push({...(responseData as any)[key], id: key});
                }
            }
            return listaArray;
          }
          ),
        );
    }

    getSuin(id: string) {
      return this.http.get<Suino>(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
    }
    
  
      apagarTodosSuinos() {
        return this.http.delete('https://suinocultura-27005-default-rtdb.firebaseio.com/posts.json');
      }
      deletarSuino(id: string) {
        return this.http.delete(`https://suinocultura-27005-default-rtdb.firebaseio.com/posts/${id}.json`);
      }

      editarSuino(id:string, SuinoData: {   
                                              brincoAnimal: number;
                                              brincoPai: number;
                                              brincoMae: number;
                                              dataNascimento: string;
                                              dataSaida: string;
                                              status: string;
                                              sexo: string;
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
}
