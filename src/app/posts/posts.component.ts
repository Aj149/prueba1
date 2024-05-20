import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postServiceService: PostServiceService) { }


  ngOnInit(): void {
    this.postServiceService.getPosts()
      .subscribe((e) =>{
        this.posts = e})
        console.log(this.posts)
      }
  }