import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
  providers: [ PostService, DatePipe ]
})

export class AddPostComponent implements OnInit {

  public post : Post;
  todayDate = new Date();

  constructor(private postService: PostService, private datePipe: DatePipe,  private router: Router) {
    this.post = new Post();
   }

  ngOnInit(): void {
  }

  addPost() {

    var date = this.datePipe.transform(this.todayDate, 'yyyy-MM-dd') 
      ? this.datePipe.transform(this.todayDate, 'yyyy-MM-dd') 
      : '';
    var user = sessionStorage.getItem('user') 
      ? sessionStorage.getItem('user') 
      : 'Anonyme'
    var author = user ? JSON.parse(user) : 'Anonyme';

    this.post.date = date ? date : '';
    this.post.author = user ? (author.userFirstName + ' ' + author.userLastName) : 'Anonyme'

    console.log(this.post);

    if(this.post.title && this.post.content){
      console.log('test')
      this.postService.addPost(this.post).subscribe(res =>{
        console.log('response is ', res)
        this.router.navigate(['/home']);
      });
    } else {
      alert('Title and Content required');
    }
  }

}
