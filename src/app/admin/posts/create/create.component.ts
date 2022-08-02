import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import employees from '../data.json';

//component to render create post
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreatePostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    //comment here
  }

  //create posts form
  createPostsForm = new FormGroup({
    email: new FormControl(),
    title: new FormControl(),
    content: new FormControl(),
    author: new FormControl()
  });

  validComment: boolean= true;

  ngOnInit(): void {
    //comment here
  }
  
  //create posts function
  createPost(data: any){
    if(this.createPostsForm.valid){
      let id= employees.employees.length+1;
      employees.employees.push({id:id, src:"", title:data.title, author:data.author, content:data.content, email:data.email, comments: []});
      this.router.navigateByUrl('/posts');
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }

}
