import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    employees.employees.map(post=>{
      if(post.id==this.empId)
        {
          this.updatePostsForm.controls['author'].setValue(post.author);
          this.updatePostsForm.controls['content'].setValue(post.content);
          this.updatePostsForm.controls['email'].setValue(post.email);
          this.updatePostsForm.controls['title'].setValue(post.title);
        }
    })
  }
  //update post
  updatePost(data: any){
    if(this.updatePostsForm.valid){
      employees.employees.map(post=> {
        if(post.id==this.empId)
        {
          post.author = data.author;
          post.content = data.content,
          post.email = data.email;
          post.title = data.title;          
        }
      });      
      this.router.navigateByUrl('/posts');
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }
}