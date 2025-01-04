import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';

@Component({
  selector: 'app-post-hero',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './post-hero.component.html',
  styleUrls: ['./post-hero.component.scss']
})
export class PostHeroComponent {
  public technologies: any[] = [];

  constructor() {
    this.technologies = [
      { id: 1, name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
      { id: 2, name: 'TypeScript', src: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.svg' },
      { id: 3, name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
    ];
  }
}
