import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivrosDadosComponent } from './livros-dados/livros-dados.component';

const routes: Routes = [
  {path:'lista', component: LivroListaComponent},
  {path:'dados', component: LivrosDadosComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
