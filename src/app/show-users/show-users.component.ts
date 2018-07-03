import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User, UserError } from '../interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  
  usersUrl = '/api/users/';
  usersReviewUrl = '/api/save/users/';
  users: User[];
  markedUsers = [];
  error: UserError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {    
  }

  getUsers() {
    return this.http.get<any>(this.usersUrl).subscribe(
      data => {        
        this.users = data;
        console.log('users', this.users);
      },
      err => {
        this.error = err.error;
      }
    );
  }

  markUser(id, index) {
    this.users[index].review = 1;
    this.markedUsers.push(id);
  }

  saveChanges() {
    console.log(this.markedUsers);
    this.http.post<any>(
      this.usersReviewUrl, 
      this.markedUsers, 
      this.httpOptions).subscribe(
      res => {
        console.log(res);
      },
      err => console.log('saveChanges err:', err)
    );
  }

}
