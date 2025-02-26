import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

interface Post {
  forum: string;
  author: string;
  time: string;
  title: string;
  content: string;
  votes: number;
  comments: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, TopBarComponent, SidebarComponent]
})
export class AppComponent {
  title = 'CodeSpace';
  
  posts: Post[] = [
    {
      forum: 'programming',
      author: 'programmer123',
      time: '8 hours ago',
      title: 'Just launched my first web app using React!',
      content: 'After months of learning React, I finally launched my first web application. It\'s a simple todo app but I\'m really proud of what I\'ve accomplished.',
      votes: 142,
      comments: 24
    },
    {
      forum: 'webdesign',
      author: 'designguru',
      time: '3 hours ago',
      title: 'What do you think of this new design trend?',
      content: 'I\'ve been seeing a lot of websites adopt this new design approach. What are your thoughts on it?',
      votes: 89,
      comments: 36
    },
    {
      forum: 'tech',
      author: 'technews',
      time: '5 hours ago',
      title: 'New AI model breaks all previous benchmarks',
      content: 'A new AI model has been released that outperforms all previous models on standard benchmarks by a significant margin.',
      votes: 267,
      comments: 127
    }
  ];

  activeSort = 'hot';

  setActiveSort(sort: string) {
    this.activeSort = sort;

    // Sort posts based on the selected sort option
    if (sort === 'hot') {
      this.posts.sort((a, b) => b.votes / 2 + b.comments - (a.votes / 2 + a.comments));
    } else if (sort === 'new') {
      // Assuming newer posts have more recent timestamps (this is simplified)
      this.posts.sort((a, b) => a.time.localeCompare(b.time));
    } else if (sort === 'top') {
      this.posts.sort((a, b) => b.votes - a.votes);
    } else if (sort === 'rising') {
      this.posts.sort((a, b) => b.comments - a.comments);
    }
  }
}
