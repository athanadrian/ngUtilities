import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { AppError } from 'app/common/errors/app-error';
import { NotFoundError } from 'app/common/errors/not-found-error';
import { BadRequestError } from 'app/common/errors/bad-request-error';

@Injectable()
export class BaseService {

    constructor(private url: string, private http: Http) { }

    getAll() {
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.hadleError);
    }

    create(resourse) {
        return this.http.post(this.url, JSON.stringify(resourse))
            .map(response => response.json())
            .catch(this.hadleError);
    }

    update(resourse) {
        return this.http.patch(this.url + '/' + resourse.id, JSON.stringify({ resourse }))
            .map(response => response.json())
            .catch(this.hadleError);
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.hadleError);
    }


    private hadleError(error: Response) {
        if (error.status === 400) {
            Observable.throw(new BadRequestError(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error.json()));
        }

        return Observable.throw(new AppError(error.json()));
    }
}
