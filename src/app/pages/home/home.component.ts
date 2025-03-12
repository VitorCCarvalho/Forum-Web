import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ForumService } from '../../components/forum/forum.service';
import { Forum } from '../../components/forum/forum';

interface Post {
  title: string;
  author: string;
  forum: string;
  time: string;
  content: string;
  upvotes: number;
  comments: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.listar().subscribe((forums) => {
      this.forums = forums;
    })
  }

  private forums: Forum[] = [];
}
