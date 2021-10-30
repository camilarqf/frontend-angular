import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})

export class CriarProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  submitted = false;

  constructor(private produtoService: ProdutoService,
    private router: Router,
   ) { }

  ngOnInit(): void {
  }

  newProduto(): void {
    this.submitted = false;
    this.produto = new Produto();
  }

  save() {
    this.produtoService.createProduto(this.produto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.produto = new Produto();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/produtos']);
  }


}
