import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticaInterceptor } from './interceptors/autentica.interceptor';

import { SuinoFormComponent } from './components/suino-form/suino-form.component';
import { SuinoComponent } from './components/suino/suino.component';
import { SuinoEditarComponent } from './components/suino-editar/suino-editar.component';
import { PesoFormComponent } from './components/peso-form/peso-form.component';
import { ListaPesoComponent } from './components/lista-peso/lista-peso.component';
import { EditarPesoComponent } from './components/editar-peso/editar-peso.component';
import { IdadePipe } from './pipes/idade.pipe';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SessaoComponent } from './components/sessao/sessao.component';
import { ListaSessaoComponent } from './components/lista-sessao/lista-sessao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SuinoFormComponent,
    SuinoComponent,
    SuinoEditarComponent,
    PesoFormComponent,
    ListaPesoComponent,
    EditarPesoComponent,
    IdadePipe,
    ContatoComponent,
    FooterComponent,
    FilterPipe,
    SessaoComponent,
    ListaSessaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
