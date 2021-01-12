import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  public singleArticle: any; 
  
  constructor(
    private _blog: BlogService,
    private router: Router,
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
                this.editArticleForm.controls['title'].setValue(this.singleArticle.title);
                this.editArticleForm.controls['description'].setValue(this.singleArticle.description);
                this.editArticleForm.controls['content'].setValue(this.singleArticle.content);
              }
            )
        }
      )
  }

  editArticleForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
  });

  public onSubmit = () => {
      this._blog.editArticle(this.singleArticle.id, this.editArticleForm.value)
      .subscribe(
        (data) => {
          console.log("article editted!");
        }
      )
      this.router.navigate(['/blog']);
  }
}
