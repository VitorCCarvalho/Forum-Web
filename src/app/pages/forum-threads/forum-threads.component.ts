import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FthreadComponent } from '../../components/fthread/fthread.component';
import { FThreadService } from '../../components/fthread/fthread.service';
import { ForumService } from '../../components/forum/forum.service';
import { FThread } from '../../components/fthread/fthread';
import { Forum } from '../../components/forum/forum';

@Component({
  selector: 'app-forum-threads',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FthreadComponent],
  providers: [
    FThreadService,
    ForumService
  ],
  templateUrl: './forum-threads.component.html',
  styleUrls: ['./forum-threads.component.scss']
})
export class ForumThreadsComponent implements OnInit {
  forum: Forum | null = null;
  stickyThreads: FThread[] = [];
  regularThreads: FThread[] = [];

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService,
    private threadService: FThreadService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const forumId = +params['id']; // Convert string to number
      
      // Load forum details
      this.forumService.buscarPorId(forumId).subscribe(forum => {
        this.forum = forum;
      });

      // Load threads for this forum
      this.threadService.listarPorForum(forumId).subscribe(threads => {
        // Separate sticky and regular threads
        this.stickyThreads = threads.filter(thread => thread.sticky);
        this.regularThreads = threads.filter(thread => !thread.sticky);
      });
    });
  }
}
