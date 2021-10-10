import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ PostService ]
})
export class HomeComponent implements OnInit {

  public posts : any = [];

  constructor(private router: Router, private postService: PostService) {
   }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(){
    this.postService.getAllPost().subscribe(result => {
      console.log(result)
      this.posts = result;
    });
  }

}
