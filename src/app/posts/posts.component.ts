import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { AppError } from 'app/common/errors/app-error';
import { NotFoundError } from 'app/common/errors/not-found-error';
import { BadRequestError } from 'app/common/errors/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(data => this.posts = data);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;

      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          //this.form.setErrors(error.originalError);
        }
        else throw error;
      });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(345)
      .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post is already deleted.')
        }
        else throw error;
      });
  }
}
