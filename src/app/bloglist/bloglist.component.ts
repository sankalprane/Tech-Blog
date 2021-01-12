import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { articleDTO } from '../models/article.model';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  constructor(private _blog: BlogService) { }

  public articleList:articleDTO[] = [];

  ngOnInit(): void {
    this.showBloglist();
  }

  public showBloglist = () => {
    this._blog.getArticleList()
      .subscribe(
        (data: any) => {
          let temp = Object.keys(data);
          temp.forEach(t => {
            this.articleList.push(data[t]);
          });
      });
  }

  public deleteArticle = (id: number) => {
    this._blog.deleteArticle(id)
      .subscribe(
        (data: any) => {
          this.articleList = [];
          this.showBloglist();
      });
  }
}
