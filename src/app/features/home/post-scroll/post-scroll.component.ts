import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import data from 'src/app/shared/data/home-card-data.json'

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
