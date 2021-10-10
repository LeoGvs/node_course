import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { ObjectId } from 'mongoose';


@Component({
  selector: 'app-home',
  templateUrl: './user-reviews.component.html',
  providers: [ PostService ]
})
export class UserReviewsComponent implements OnInit {

  public posts : any = [];
  user = sessionStorage.getItem('user') 
      ? sessionStorage.getItem('user') 
      : 'Anonyme'
  nameUser = this.user ? JSON.parse(this.user) : 'Anonyme';

  filterargs = this.user ? (this.nameUser.userFirstName + ' ' + this.nameUser.userLastName) : 'Anonyme';

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

  editPost(post: Post){
    this.postService.setPostToEdit(post);
  }

  deletePost(id: ObjectId) {
    this.postService.deletedPostId(id);
  }

}
