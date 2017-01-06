import { Component, OnInit, Output } from '@angular/core';
import {Recipe} from './Recipe';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

 selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
