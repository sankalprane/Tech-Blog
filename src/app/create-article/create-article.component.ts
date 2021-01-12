import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  constructor(private _blog: BlogService,
              private router: Router) { }

  ngOnInit(): void {
  }

  createArticleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
  });

  public onSubmit = () => {
    // console.log(this.createArticleForm.value);
    this._blog.createArticle(this.createArticleForm.value)
      .subscribe(
        (data) => {
          console.log("article created!");
        }
      )
      this.router.navigate(['/blog']);
  }

}
