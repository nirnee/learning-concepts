import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../../posts/data.json';

//component to render update comments 
@Component({
  selector: 'app-update-comments',
  templateUrl: './update-comments.component.html',
  styleUrls: ['./update-comments.component.scss']
})
export class UpdateCommentsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //update comments form
  updateCommentsForm = new FormGroup({
    comment: new FormControl('',Validators.compose([Validators.required, Validators.minLength(2)]))
  });

  routeSub: any;
  empId: any;
  data: any;
  commentId: any;
  commentsUrl: any;
  validComment: boolean= true;
  
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['postId'].substring(1));
      this.commentId = parseInt(params['commentId'].substring(1));
    });
    this.data = employees.employees.filter(post=>post.id == this.empId)[0];
    this.commentsUrl= 'comments/:'+this.empId;
    this.getComment();
  }
  
  //get comment function
  getComment() {
    employees.employees.map(post=> {
        if(post.id==this.empId)
        {
          post['comments'].map(Comment=>{
            if(Comment.comId == this.commentId){
              this.updateCommentsForm.controls['comment'].setValue(Comment.comment);
            }
          })
        }
      });
  }

  //update comment function
  updateComment(data: any){
    if(this.updateCommentsForm.valid && data.comment.trim().length>1){
      employees.employees.map(post=> {
        if(post.id==this.empId)
        {
          post['comments'].map(comment=>{
            if(comment.comId == this.commentId){
              comment.comment = data.comment;
            }
          })
        }
      });
       this.router.navigateByUrl(this.commentsUrl);
    } else {
      //if form is not valid show error message
      this.validComment = false;
    }
  }

  //go back function
  goBack(){
    this.router.navigateByUrl(this.commentsUrl);
  }
}

