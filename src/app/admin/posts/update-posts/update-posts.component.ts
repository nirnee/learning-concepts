import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../data.json';

@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.scss']
})
export class UpdatePostsComponent implements OnInit {

  //component to render update posts 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    //comment here
  }
  
  //update posts form
  updatePostsForm = new FormGroup({
    email: new FormControl(),
    title: new FormControl(),
    content: new FormControl(),
    author: new FormControl()
  });

  routeSub: any;
  empId: any;
  validComment: boolean= true;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['id']) 
    });
    this.getPost();
  }
  
  //get post values
  getPost() {
    employees.employees.map(a=>{
      if(a.id==this.empId)
        {
          this.updatePostsForm.controls['author'].setValue(a.author);
          this.updatePostsForm.controls['content'].setValue(a.content);
          this.updatePostsForm.controls['email'].setValue(a.email);
          this.updatePostsForm.controls['title'].setValue(a.title);
        }
    })
  }
  //update post
  updatePost(data: any){
    if(this.updatePostsForm.valid){
      employees.employees.map(a=> {
        if(a.id==this.empId)
        {
          a.author = data.author;
          a.content = data.content,
          a.email = data.email;
          a.title = data.title;          
        }
      });      
      this.router.navigateByUrl('/posts');
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }
}