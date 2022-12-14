import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../../../admin/posts/data.json';

//render delete component
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  
  //define variables
  routeSub: any;
  empId: any;
  commentId: any;
  title: string = '';

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private _location: Location
    ) {
    //comment here
   }
  
  ngOnInit(): void {
     this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['postId'].substring(1));
      this.commentId = parseInt(params['commentId']?.substring(1));
    });
    this.title = this.commentId? 'comment' : 'post';
  }

  //goBack function
  goBack(){
    this._location.back();
  }

  //delete function
  delete(){
    if(!this.commentId) {
      let result = [employees.employees][0];
      let arr = result.filter(post=>post.id!=this.empId);
      employees.employees = JSON.parse(JSON.stringify(arr));
      this.router.navigateByUrl('/posts');
    } else {
      let arr:any = [];
      employees.employees.map(post=>{
        if(post.id == this.empId) {
         let result = [post.comments][0];
         arr = result.filter(post=>post.comId!=this.commentId);
         post.comments = arr;
         return;
        }
      });
      this.router.navigateByUrl('/comments/:'+this.empId);
    }
  }
}
