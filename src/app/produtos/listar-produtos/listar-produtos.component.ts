import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  produtos!: Observable<Produto[]>;
  displayedColumns: string[] = ['codigo', 'nome', 'preco', 'acao'];

  constructor(private produtoService: ProdutoService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produtos = this.produtoService.getProdutosList()
  }

  deleteProduto(codigo: string) {
    this.produtoService.deleteProduto(codigo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  produtoDetails(codigo: string){
    this.router.navigate(['produtos/visualizar', codigo]);
  }

  updateProduto(codigo: string){
    this.router.navigate(['produtos/editar', codigo]);
  }
}
