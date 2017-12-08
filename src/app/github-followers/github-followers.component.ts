import { Component, OnInit } from '@angular/core';
import { GithubService } from 'app/services/github.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getAll()
      .subscribe(followers => this.followers = followers);
  }

}
