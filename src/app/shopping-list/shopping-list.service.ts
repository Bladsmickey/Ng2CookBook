import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';

@Injectable()
export class ShoppingListService {
    private Items: Ingredient[] = [];
  constructor() { }

  getItems(){
    return this.Items;
  }

  addItems(Items: Ingredient[]){
    Array.prototype.push(this.Items, Items);
  }

}
