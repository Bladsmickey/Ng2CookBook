import { Injectable } from '@angular/core';
import { Recipe } from './Recipe'
import { Ingredient } from '../shared/Ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Spaguetti Napolitano", "Lorem Ipsum", "https://mejorconsalud.com/wp-content/uploads/2015/08/spaguetti-napolitano-500x334.jpg",[
      new Ingredient('Vermicelli', 1),
      new Ingredient('Salsa', 1),
    ]),
    new Recipe("Spaghetti & Meatballs", "Lorem Ipsum", "https://www.sbarro.com/wp-content/uploads/2015/04/12-sbarro-spaghetti-meatballs.jpg",[
      new Ingredient('Vermicelli', 1),
      new Ingredient('Salsa', 1),
    ]),
    new Recipe("Spaghetti y Salmón", "Lorem Ipsum", "http://cdn.kiwilimon.com/recetaimagen/26876/24597.jpg",[
      new Ingredient('Vermicelli', 1),
      new Ingredient('Salsa', 1),
    ]),
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}
