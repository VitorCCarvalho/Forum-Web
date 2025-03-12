import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forum } from '../forum/forum';
import { ForumService } from '../forum/forum.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  // Popular forums data
  listForums: Forum[] = [];

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.listar().subscribe((forums) => {
      this.listForums = forums;
    })
  }

  // Forum rules
  forumRules = [
    'Be respectful to others',
    'No spam or self-promotion',
    'Use appropriate tags',
    'Follow content guidelines',
    'No harassment or bullying'
  ];

}
