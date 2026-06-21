import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  loginService = inject(LoginService);
  ngOnInit() {

  }

}
