import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap } from 'rxjs';
import { Usuario } from '../model/usuario.model';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AutenticaService {

  usuario = new BehaviorSubject<Usuario>(new Usuario('', '', '', new Date()));

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyABFRYwt1nBvk3bid38TE8lbsl0shMN4aQ]', 
    {
       email: email,
       password: password,
       returnSecureToken: true
    }).pipe(
       tap(resData => {
         const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
         const usuario = new Usuario(
           resData.email,
           resData.localId,
           resData.idToken,
           expiracaoData
         );
 
         this.usuario.next(usuario);
         localStorage.setItem('userData', JSON.stringify(usuario));
       }),
       catchError(error => {
         console.log('Erro ao cadastrar usuário:', error); // Adicione este console.log para imprimir o objeto de erro completo
         throw error; // Rethrow o erro para que o componente que chama a função signupUser possa lidar com ele
       })
    );
 }
 

  loginUser(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyABFRYwt1nBvk3bid38TE8lbsl0shMN4aQ',
    {
      email: email,
      password: password,
      returnSecureToken: true
   }).pipe(
    tap(resData => {
      const expiracaoData = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const usuario = new Usuario(
          resData.email,
          resData.localId,
          resData.idToken,
          expiracaoData
        );
        this.usuario.next(usuario);
        localStorage.setItem('userData', JSON.stringify(usuario));
    }),
   );
  }

  autoLogin() {
    const userData :{
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    
    } = JSON.parse(localStorage.getItem('userData') as string);
    if(!userData) {
      return;
    }

    const loadedUser = new Usuario(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.usuario.next(loadedUser);
    }


  }

  logout() {
    this.usuario.next(new Usuario('', '', '', new Date()));

  }


}
