import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { VisualizarProdutoComponent } from './visualizar-produto/visualizar-produto.component';

@NgModule({
  declarations: [
    CriarProdutoComponent,
    ListarProdutosComponent,
    EditarProdutoComponent,
    VisualizarProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule
  ]
})
export class ProdutosModule { }
