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
  bikesUrbanas: Product[] = bikesUrbanas
}
