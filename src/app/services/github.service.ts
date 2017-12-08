import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from 'app/services/base.service';

@Injectable()
export class GithubService extends BaseService {

  constructor(http: Http) {
    super('https://api.github.com/users/athanadrian/followers', http);
  }
}