import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../Recipe';
import { ShoppingListService  } from '.../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onAddToShoppingList(){

  }

}
