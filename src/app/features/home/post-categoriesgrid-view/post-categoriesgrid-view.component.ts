import { Component, OnInit } from '@angular/core';
import data from 'src/app/shared/data/post-categoriesgrid-data.json';

@Component({
  selector: 'app-post-categoriesgrid-view',
  templateUrl: './post-categoriesgrid-view.component.html',
  styleUrls: ['./post-categoriesgrid-view.component.scss']
})
export class PostCategoriesgridViewComponent implements OnInit {
  public firstCategoryData: any = [];
  public secondCategoryData: any = [];
  public firstCategoryType: string = '';
  public secondCategoryType: string = '';

  constructor() { }
  
  ngOnInit(): void {
    this.firstCategoryData = data.firstcategory;
    this.firstCategoryType = data.firstcategory[0].categoryType;
    this.secondCategoryData = data.secondcategory;
    this.secondCategoryType = data.secondcategory[0].categoryType;
  }
}
