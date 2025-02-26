import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../../components/top-bar/top-bar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { PostComponent } from '../../components/post/post.component';

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
  imports: [CommonModule, TopBarComponent, SidebarComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sortBy: 'hot' | 'new' | 'top' | 'rising' = 'hot';

  posts: Post[] = [
    {
      title: 'Exciting New Angular Features Coming Soon!',
      author: 'angular_fan',
      forum: 'r/Angular',
      time: '2 hours ago',
      content: 'The Angular team has announced some amazing new features...',
      upvotes: 156,
      comments: 45
    },
    {
      title: 'Best Practices for Component Design',
      author: 'dev_guru',
      forum: 'r/webdev',
      time: '5 hours ago',
      content: 'When designing components, it\'s important to consider...',
      upvotes: 234,
      comments: 89
    },
    {
      title: 'The Future of Web Development',
      author: 'tech_visionary',
      forum: 'r/programming',
      time: '8 hours ago',
      content: 'As we look towards the future of web development...',
      upvotes: 567,
      comments: 123
    }
  ];

  setSortBy(sort: 'hot' | 'new' | 'top' | 'rising') {
    this.sortBy = sort;
    // Implement sorting logic here
  }
}
