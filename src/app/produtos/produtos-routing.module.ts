import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';

const routes: Routes = [
  { path: '', component: ListarProdutosComponent },
  { path: 'cadastrar', component: CriarProdutoComponent },
  { path: 'editar/:codigo', component: EditarProdutoComponent },
  { path: 'visualizar/:codigo', component: VisualizarProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
