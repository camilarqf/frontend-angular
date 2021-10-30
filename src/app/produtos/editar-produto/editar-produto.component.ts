import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  codigo!: string;
  produto!: Produto;
  submitted = false;

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

  updateProduto() {
    this.produtoService.updateProduto(this.codigo, this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }

  onSubmit() {
    this.updateProduto();
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }

}
