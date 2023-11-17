import { Injectable } from '@angular/core';
import {Editora} from './editora';

Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  editoras: Array<Editora> = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(3, 'Addison Wesley'),
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.CodEditora === codEditora)[0];
    return editora ? editora.nome : 'Editora não encontrada';
  }

};
