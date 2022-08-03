import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    comment: new FormControl()
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
    this.data = employees.employees.filter(a=>a.id == this.empId)[0];
    this.commentsUrl= 'comments/:'+this.empId;
    this.getComment();
  }
  
  //get comment function
  getComment() {
    employees.employees.map(a=> {
        if(a.id==this.empId)
        {
          a['comments'].map(b=>{
            if(b.comId == this.commentId){
              this.updateCommentsForm.controls['comment'].setValue(b.comment);
            }
          })
        }
      });
  }

  //update comment function
  updateComment(data: any){
    if(this.updateCommentsForm.valid){
      employees.employees.map(a=> {
        if(a.id==this.empId)
        {
          a['comments'].map(b=>{
            if(b.comId == this.commentId){
              b.comment = data.comment;
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

