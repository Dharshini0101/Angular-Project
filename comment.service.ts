import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient : HttpClient) { }

  getAllComments(){
       return this.httpClient.get("http://localhost:8084/comments/all");
  }

  registerComment(cmts: any){
    this.httpClient.post("http://localhost:8084/comments/add/",cmts)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  searchCommentByPid(pid:any){
    return this.httpClient.get("http://localhost:8084/comments/pid/"+pid);
  
  }

  deleteCommentbyCid(cid:any){
    return this.httpClient.delete("http://localhost:8084/comments/delete/"+cid);
  }
 
}