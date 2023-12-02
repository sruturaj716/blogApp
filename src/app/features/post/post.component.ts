import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  public postId: number= 0;
 constructor(private route:ActivatedRoute){}
 ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  if (idParam !== null) {
    this.postId = +idParam;
    // ... other initialization logic
  } else {
    // Handle the case where 'id' is null
  }
 }
}
