import { Component } from '@angular/core';
import { AlunoService } from '../alunos.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  providers: [MessageService]
})
export class AlunosCadastroComponent {
  aluno = {
    nome: '',
    idade: null,
    curso: '',
    email: '',
    telefone: ''
  };

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private messageService: MessageService
  ) {}

  cadastrar() {
    this.alunoService.adicionarAluno({ ...this.aluno });
    this.messageService.add({
      severity: 'success',
      summary: 'Aluno Cadastrado',
      detail: `${this.aluno.nome} foi adicionado com sucesso!`
    });

    this.aluno = {
      nome: '',
      idade: null,
      curso: '',
      email: '',
      telefone: ''
    };

    // redireciona após 1s
    setTimeout(() => this.router.navigate(['/alunos']), 1000);
  }
}
