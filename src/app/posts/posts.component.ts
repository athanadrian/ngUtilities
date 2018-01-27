import { Component, OnInit } from '@angular/core';
import { PostService } from 'app/services/post.service';
import { AppError } from 'app/common/errors/app-error';
import { NotFoundError } from 'app/common/errors/not-found-error';
import { BadRequestError } from 'app/common/errors/bad-request-error';
import { trigger, state, transition, style, animate, keyframes, animation, useAnimation, query, animateChild, stagger } from '@angular/animations';
import { bounchOutLeftAnimation, fadeInAnimation } from 'app/animations/posts-animation';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('posts-animation', [
      transition(':enter', [
        query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(1000)
        ]),
        query('@post-animation',
          stagger(200, animateChild()), { optional: true })
      ])
    ]),
    trigger('post-animation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '2000ms',
            easing: 'ease-out'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounchOutLeftAnimation)
      ])
    ]),
  ]
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
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;

      }, (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error
        };
      });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(index)
      .subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError) {
          alert('This post is already deleted.')
        } else { throw error };
      });
  }

  animationStart($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }
}
