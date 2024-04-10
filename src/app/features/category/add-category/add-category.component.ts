import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddCategoryRequest } from '../models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  
  model: AddCategoryRequest;
  private addCategorySubscribtion?: Subscription;

  constructor() {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }


  onFormSubmit() {
    // this.addCategorySubscribtion = this.categoryService.addCategory(this.model)
    // .subscribe({
    //   next: (response) => {
    //     console.log('This was successful!');

    //   }
    // })
  }

  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}
