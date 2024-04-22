import { Category } from './../models/category.model';
import { CategoryService } from './../services/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UpdateCategoryRequest } from '../models/update-category-request.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  id: string | null = null;
  paramSubscription?: Subscription;
  updateCategorySubscription?: Subscription;
  category?: Category;

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ){

  }
  
  ngOnInit(): void {
    this.paramSubscription = this.route.paramMap.subscribe({
      next: (params) =>{
       this.id = params.get('id')

       if (this.id) {
        //get the data from the API for the category id
        this.categoryService.getCategoryById(this.id).subscribe({
          next: (response) => {
            this.category = response;
          }
        });
       }
      }
    });
  }

  onFormSubmit():void{
    const updateCategoryRequest: UpdateCategoryRequest = {
      name : this.category?.name ?? '',
      urlHandle : this.category?.urlHandle ?? ''
    }

    //pass obj to service
    if (this.id) {
      this.updateCategorySubscription = this.categoryService.updateCategory(this.id,updateCategoryRequest)
      .subscribe({
        next: (response) =>{
          this.router.navigateByUrl('/admin/categories')
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.updateCategorySubscription?.unsubscribe();
  }

}
