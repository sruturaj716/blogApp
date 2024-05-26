import { Component, OnInit } from '@angular/core';
import data from 'src/app/shared/data/home-card-data.json'

@Component({
  selector: 'app-post-scroll',
  templateUrl: './post-scroll.component.html',
  styleUrls: ['./post-scroll.component.scss']
})
export class PostScrollComponent implements OnInit {
  public postInfo: any[] = [];
  public postImages: any[] = [];
  public currentPostImage: string = '';

  constructor() {
    this.postImages = [
      { id: 0, img: 'assets/post_lg_1.jpg.webp' },
      { id: 1, img: 'assets/post_lg_2.jpg.webp' },
      { id: 2, img: 'assets/post_lg_3.jpg.webp' },
      { id: 3, img: 'assets/post_lg_4.jpg.webp' }];
  }

  ngOnInit(): void {
    this.postInfo = [data.homeSliderCardData[0]];
    this.currentPostImage = this.postImages[0].img.toString();
  }

  public OnSlide(value: string, item: any) {
    let currentIndex = data.homeSliderCardData.indexOf(item);
    let newIndex: number;
    if (value === 'right') {
      newIndex = (currentIndex + 1) % data.homeSliderCardData.length;
      this.currentPostImage = this.getCurrentPostimage(newIndex);
    } else {
      newIndex = (currentIndex - 1 + data.homeSliderCardData.length) % data.homeSliderCardData.length;
      this.currentPostImage = this.getCurrentPostimage(newIndex);
    }
    this.postInfo = [data.homeSliderCardData[newIndex]];
  }

  public getCurrentPostimage(currentIndex: number): string {
    return this.postImages.filter(images => images.id == currentIndex).map(image => image.img).toString();
  }
}
