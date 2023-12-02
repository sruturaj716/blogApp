import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  constructor() { }

  ngOnInit(): void {
    // Fetch data from the backend API if needed
  }
  featuredPosts = [
    { id: 1, title: 'Featured Post 1', summary: 'Summary of Featured Post 1' },
    { id: 2, title: 'Featured Post 2', summary: 'Summary of Featured Post 2' },
    // Add more featured posts as needed
  ];
  latestPosts = [
    { id: 3, title: 'Latest Post 1', summary: 'Summary of Latest Post 1' },
    { id: 4, title: 'Latest Post 2', summary: 'Summary of Latest Post 2' },
    // Add more latest posts as needed
  ];


}
