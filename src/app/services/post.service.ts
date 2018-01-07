import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from 'app/services/base.service';

@Injectable()
export class PostService extends BaseService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
