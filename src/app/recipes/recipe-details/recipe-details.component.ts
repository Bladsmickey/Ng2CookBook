import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../Recipe';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.ShoppingListService.addItems(this.selectedRecipe.ingredients);
  }

}
