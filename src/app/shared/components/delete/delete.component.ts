import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../../../admin/posts/data.json';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private _location: Location
    ) {
    //comment here
   }

  routeSub: any;
  empId: any;
  commentId: any;
  title: string = '';
  
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
      let arr = result.filter(a=>a.id!=this.empId);
      employees.employees = JSON.parse(JSON.stringify(arr));
      this.router.navigateByUrl('/posts');
    } else {
      let arr:any = [];
      employees.employees.map(a=>{
        if(a.id == this.empId) {
         let result = [a.comments][0];
         arr = result.filter(a=>a.comId!=this.commentId);
         a.comments = arr;
        }
      });
      this.router.navigateByUrl('/comments/:'+this.empId);
    }
  }
}
