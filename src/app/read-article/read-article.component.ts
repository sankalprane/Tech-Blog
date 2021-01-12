import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {

  public singleArticle: any; 

  constructor(
    private _blog: BlogService,
    private _Aroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._Aroute.params
      .subscribe(
        (res) => {
          this._blog.getSingleArticle(res.id)
            .subscribe(
              (data) => {
                this.singleArticle = data;
                console.log(this.singleArticle);
              }
            )
        }
      )
  }

}
