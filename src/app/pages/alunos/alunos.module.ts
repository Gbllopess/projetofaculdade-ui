import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { PrimengModule } from 'src/app/primeng.module';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AlunosListaComponent,
    AlunosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule,
    PrimengModule,
    ToastModule // ⬅️ necessário para usar <p-toast>
  ],
  providers: [MessageService] // ⬅️ necessário para mostrar mensagens
})
export class AlunosModule {
  
}

