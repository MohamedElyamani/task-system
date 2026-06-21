import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
  imports: [NavbarComponent, RouterOutlet]
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
