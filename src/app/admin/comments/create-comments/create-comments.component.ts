import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../../posts/data.json';

//component to render create comment
@Component({
  selector: 'app-create-comments',
  templateUrl: './create-comments.component.html',
  styleUrls: ['./create-comments.component.scss']
})
export class CreateCommentsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //comment here
   }

  //create
  createCommentsForm = new FormGroup({
    comment: new FormControl()
  });

  routeSub: any;
  empId: any;
  data: any;
  comments: any;
  commentsUrl: any;
  validComment: boolean= true;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['postId'].substring(1));
    });
    this.data = employees.employees.filter(a=>a.id == this.empId)[0];
    this.commentsUrl= 'comments/:'+this.empId;
  }
  
  //create new comment function
  createComment(data: any){
    if(this.createCommentsForm.valid){      
      employees.employees.map(a=> {
        if(a.id==this.empId)
        { 
         let id = a.comments.length+1
         a.comments.push({comId:id, comment:data.comment})     
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
