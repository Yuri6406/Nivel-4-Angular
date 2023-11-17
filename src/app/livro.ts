//Criando a class Livro, composta dos campos: codigo e codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como um vetor de texto

export class Livro {
  codigo: number;
  titulo: string;
  autores: string[];
  resumo: string;
  codEditora: number;
  autoresForm: string;

    constructor(
      codigo: number = 0,
      codEditora: number = 0,
      titulo: string = '',
      resumo: string = '',
      autores: string[] = [],
      autoresForm: string = ''
    ) 
    {
      this.codigo = codigo;
    this.titulo = titulo;
    this.autores = autores;
    this.resumo = resumo;
    this.codEditora = codEditora;
    this.autoresForm = autoresForm;
     }
  }

  export default Livro; 