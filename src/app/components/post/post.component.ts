import { Component, Input } from '@angular/core';

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
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post = {
    forum: 'programming',
    author: 'user123',
    time: '5 hours ago',
    title: 'Default Post Title',
    content: 'Default post content',
    votes: 0,
    comments: 0
  };

  upvote() {
    this.post.votes++;
  }

  downvote() {
    this.post.votes--;
  }
}
