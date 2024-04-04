// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { SuinoComponent } from './components/suino/suino.component';
// import { SuinoFormComponent } from './components/suino-form/suino-form.component';
// import { SuinoEditarComponent } from './components/suino-editar/suino-editar.component';
// import { PesoFormComponent } from './components/peso-form/peso-form.component';
// import { ListaPesoComponent } from './components/lista-peso/lista-peso.component';
// import { EditarPesoComponent } from './components/editar-peso/editar-peso.component';
// import { AuthGuard } from './guard/auth.guard';
// import { ContatoComponent } from './components/contato/contato.component';
// import { SessaoComponent } from './components/sessao/sessao.component';

// const routes: Routes = [
//   { path: '', component: LoginComponent},
//   { path: 'listarSuinos', component: SuinoComponent, canActivate: [AuthGuard]},
//   { path: 'contato', component: ContatoComponent, canActivate: [AuthGuard]},
//   { path: 'ep/:id', component: EditarPesoComponent, canActivate: [AuthGuard]},
//   { path:'adicionarSuinos', component: SuinoFormComponent, canActivate: [AuthGuard]},
//   { path: 'editarSuino/:id', component: SuinoEditarComponent, canActivate: [AuthGuard]},
//   { path: 'peso/:id', component: PesoFormComponent, canActivate: [AuthGuard]},
//   { path: 'listarPeso/:id', component: ListaPesoComponent, canActivate: [AuthGuard]},
//   { path: 'sessao', component: SessaoComponent, canActivate: [AuthGuard]},
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SuinoComponent } from './components/suino/suino.component';
import { SuinoFormComponent } from './components/suino-form/suino-form.component';
import { SuinoEditarComponent } from './components/suino-editar/suino-editar.component';
import { PesoFormComponent } from './components/peso-form/peso-form.component';
import { ListaPesoComponent } from './components/lista-peso/lista-peso.component';
import { EditarPesoComponent } from './components/editar-peso/editar-peso.component';
import { AuthGuard } from './guard/auth.guard';
import { ContatoComponent } from './components/contato/contato.component';
import { SessaoComponent } from './components/sessao/sessao.component';
import { ListaSessaoComponent } from './components/lista-sessao/lista-sessao.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listarSuinos', component: SuinoComponent},
  { path: 'contato', component: ContatoComponent },
  { path: 'ep/:id', component: EditarPesoComponent},
  { path:'adicionarSuinos', component: SuinoFormComponent},
  { path: 'editarSuino/:id', component: SuinoEditarComponent},
  { path: 'peso/:id', component: PesoFormComponent},
  { path: 'listarPeso/:id', component: ListaPesoComponent},
  { path: 'sessao', component: SessaoComponent},
  { path: 'listarSessao', component: ListaSessaoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
