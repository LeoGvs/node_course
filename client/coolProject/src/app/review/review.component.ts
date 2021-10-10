import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { ObjectId } from 'mongoose';
var mongoose = require('mongoose');


@Component({
  selector: 'app-home',
  templateUrl: './review.component.html',
  providers: [ PostService ]
})
export class ReviewComponent implements OnInit {

  public post : any;

  constructor(private route: Router, private postService: PostService) {
   }

  ngOnInit(): void {
      var url = this.route.url;
      var idReview = url.split('/').pop() ||  '';
      var id = mongoose.Types.ObjectId(idReview);
      this.getPost(id)
  }

  getPost(id: ObjectId){
        console.log(id);
        console.log('get post')
        this.postService.getPostId(id).subscribe(result => {
        console.log('result')
        console.log(result)
        this.post = result;
    });
  }

}
