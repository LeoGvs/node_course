import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';
import { Subject } from 'rxjs';
import { ObjectId } from 'mongoose';
 
@Injectable({
    providedIn: 'root'
  })
export class PostService {

    public postEdit_Observable = new Subject();
    public post_to_be_edited;
 
    constructor(private http: HttpClient) { 
        this.post_to_be_edited = new Post();
    }

    addPost(post: Post){
        return this.http.post('http://localhost:3000/test/',{
            title : post.title,
            content : post.content,
            date : post.date,
            author : post.author,
        })
    }

    getAllPost(){
        return this.http.get('http://localhost:3000/test/',{})
    }

    notifyPostEdit(){
        this.postEdit_Observable.next();
    }

    setPostToEdit(post: Post){
        console.log('edit post service')
        this.post_to_be_edited = post;
        console.log(this.post_to_be_edited)
        //$('#editModal').modal('show');
        return this.post_to_be_edited
    }

    getPostId(id: ObjectId) {
        console.log('http://localhost:3000/test/' + id)
        return this.http.get('http://localhost:3000/test/' + id,{})
    }

    deletedPostId(id: ObjectId) {
        console.log('http://localhost:3000/test/' + id)
        return this.http.delete('http://localhost:3000/test/' + id,{})
    }
 
}