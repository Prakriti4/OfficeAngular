import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  loggedinUser:string;
  constructor(private router:Router,private alertify:AlertifyService) { }
 

  ngOnInit() {
  }
  // onBack()
  // { 
  //   this.router.navigate(['/']);
  // }

  loggedin()
  {
    this.loggedinUser= localStorage.getItem('token');
    return this.loggedinUser;
  }
  onLogout()
  {
    localStorage.removeItem('token'); 
    localStorage.removeItem('userName');
    this.alertify.success("You are logged out!");
  }

}
