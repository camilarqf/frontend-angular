import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-visualizar-produto',
  templateUrl: './visualizar-produto.component.html',
  styleUrls: ['./visualizar-produto.component.css']
})
export class VisualizarProdutoComponent implements OnInit {
  codigo!: string;
  produto!: Produto;

  constructor(private route: ActivatedRoute,private router: Router,
    private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.codigo = this.route.snapshot.params['codigo']
    this.produto = new Produto();

    this.produtoService.getProduto(this.codigo)
      .subscribe(data => {
        console.log(data)
        this.produto = data;
      }, error => console.log(error));
  }

}
