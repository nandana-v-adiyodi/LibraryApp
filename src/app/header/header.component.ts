import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  bookUser(){
    this.router.navigate(['/books']);
  };

  addUser(){
    this.router.navigate(['/new-book']);
  };
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
