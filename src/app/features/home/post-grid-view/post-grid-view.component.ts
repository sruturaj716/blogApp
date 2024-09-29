import { Component, OnInit } from '@angular/core';
import data from 'src/app/shared/data/post-grid-data.json'

@Component({
  selector: 'app-post-grid-view',
  templateUrl: './post-grid-view.component.html',
  styleUrls: ['./post-grid-view.component.scss']
})
export class PostGridViewComponent implements OnInit {

 public postsInfo :any [] = [];

  ngOnInit(): void {
      this.postsInfo = data.postGridData;
      console.log(window.innerWidth);
  }
}
