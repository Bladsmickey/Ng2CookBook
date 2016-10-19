import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe("Dummy", "Dummy", "http://www.smithfieldfoods.com/images/home/packaged-brands/armour-food.jpg");
  

  constructor() { }

  ngOnInit() {
  }

}
