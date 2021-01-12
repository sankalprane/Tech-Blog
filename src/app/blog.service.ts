import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  public getArticleList = () => {
    return this.http.get('http://127.0.0.1:8000/api/blog/');
  }

  public deleteArticle = (id: number) => {
    return this.http.delete('http://127.0.0.1:8000/api/blog/' + id + '/');
  }

  public createArticle = (data: any) => {
    return this.http.post('http://127.0.0.1:8000/api/blog/', data);
  }

  public editArticle = (id:number, data: any) => {
    return this.http.put('http://127.0.0.1:8000/api/blog/' +id + '/', data);
  }

  public getSingleArticle = (id: number) => {
    return this.http.get('http://127.0.0.1:8000/api/blog/' +id + '/');
  }
}
