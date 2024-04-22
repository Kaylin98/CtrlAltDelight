import { Category } from '../models/category.model';
import { CategoryService } from './../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit,OnDestroy {

  categories?: Category[];

  constructor(private categoryService: CategoryService){
  }
  


  ngOnInit(): void {
    this.categoryService.getAllCategories()
    .subscribe({
      next: (response) =>{
        this.categories = response;
      }
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
}
