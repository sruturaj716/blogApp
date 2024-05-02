import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CategoriesComponent } from 'src/app/features/categories/categories.component';
import data from 'src/app/shared/data/home-component-data.json'

@Component({
  selector: 'app-post-scroll',
  templateUrl: './post-scroll.component.html',
  styleUrls: ['./post-scroll.component.scss']
})
export class PostScrollComponent implements OnInit {
  @ViewChild('postCard') postCard!: ElementRef;

  public postInfo: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.postInfo = [data.homeSliderCardData[0]];
  }

  public OnSlide(value: string, item: any) {
    let currentIndex = data.homeSliderCardData.indexOf(item);
    let newIndex: number;
    if (value === 'right') {
      newIndex = (currentIndex + 1) % data.homeSliderCardData.length;
    } else {
      newIndex = (currentIndex - 1 + data.homeSliderCardData.length) % data.homeSliderCardData.length;
    }
    this.postInfo = [data.homeSliderCardData[newIndex]];
  }
}
