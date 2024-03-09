import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SuinoComponent } from './components/suino/suino.component';
import { SuinoFormComponent } from './components/suino-form/suino-form.component';
import { SuinoEditarComponent } from './components/suino-editar/suino-editar.component';
import { PesoFormComponent } from './components/peso-form/peso-form.component';
import { ListaPesoComponent } from './components/lista-peso/lista-peso.component';
import { EditarPesoComponent } from './components/editar-peso/editar-peso.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'listarSuinos', component: SuinoComponent},
  { path: 'ep/:id', component: EditarPesoComponent},
  { path:'adicionarSuinos', component: SuinoFormComponent},
  { path: 'editarSuino/:id', component: SuinoEditarComponent},
  { path: 'peso/:id', component: PesoFormComponent},
  { path: 'listarPeso/:id', component: ListaPesoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
