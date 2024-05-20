import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostServiceService } from '../post-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private PostServiceService: PostServiceService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.PostServiceService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}