import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // Popular forums data
  popularForums = [
    { name: 'tech', image: 'https://via.placeholder.com/24' },
    { name: 'programming', image: 'https://via.placeholder.com/24' },
    { name: 'webdesign', image: 'https://via.placeholder.com/24' },
    { name: 'music', image: 'https://via.placeholder.com/24' },
    { name: 'movies', image: 'https://via.placeholder.com/24' },
    { name: 'gaming', image: 'https://via.placeholder.com/24' },
    { name: 'sports', image: 'https://via.placeholder.com/24' },
    { name: 'news', image: 'https://via.placeholder.com/24' }
  ];

  // Forum rules
  forumRules = [
    'Be respectful to others',
    'No spam or self-promotion',
    'Use appropriate tags',
    'Follow content guidelines',
    'No harassment or bullying'
  ];

  constructor() { }
}
