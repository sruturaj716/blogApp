import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from 'src/app/shared/data/post-data-by-id.json';
import { postInfo } from 'src/app/shared/models/post-common-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public postId: string | undefined = '';
  public imgpath: string = 'assets/post-scroll-images/post_lg_1.jpg';
  public postInfo: postInfo[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')?.toString();
    if (idParam !== '') {
      this.postId = idParam;
      this.postInfo = data['post-info'].filter(postId => postId.id == this.postId);
    } else {
      // Handle the case where 'id' is null
    }
  }
}
