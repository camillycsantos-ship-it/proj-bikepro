import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../interfaces/product';

@Component({
  imports: [ProductCard],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})

export class HomePage {

  urbanaBege: Product = {
    id: 1,
    title: 'Urban Classic',
    price: 1800.0,
    image: 'assets/imagens/urbanas/urbana-bege.png',
  };

  urbanaPreta: Product = {
    id: 2,
    title: 'Urban Black',
    price: 3500.0,
    image: 'assets/imagens/urbanas/urbana-preta.png',
  };

  urbanaVermelha: Product = {
    id: 3,
    title: 'Urban Flash',
    price: 1500.0,
    image: 'assets/imagens/urbanas/urbana-vermelha.png',
  };

  urbanaVinho: Product = {
    id: 4,
    title: 'Urban Lux',
    price: 3200.0,
    image: 'assets/imagens/urbanas/urbana-vinho.png',
  };

}
