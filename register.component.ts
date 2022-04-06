import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../comments.service';
import { Comments } from '../Comments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cid=0;
  pid=0;
  commenter="";
  comment="";
  constructor(private service: CommentService, private router:Router) { }

  ngOnInit(): void {
  }

  insertComment(){

    let cmt : Comments = {
      "cid":this.cid,
      "commenter":this.commenter,
      "pid":this.pid,
      "comment":this.comment
       }
    //console.log(this.cid+" "+this.commenter+" "+this.pid+" "+this.comment);
      this.service.registerComment(cmt);
      this.router.navigateByUrl("display");

  }

}