import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/auth/login.service';
import { IUser } from '../../../core/models/IUser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
templateUrl: './login.component.html',
})
export class LoginComponent {

  errorMsg = signal<string>('');

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private loginService = inject(LoginService);
  private router = inject(Router);

  onSubmit() {
     const user: IUser = {
      email: this.loginForm.value.email ?? '',
      password: this.loginForm.value.password ?? ''
    };

  const success = this.loginService.login(user);

  if (success) {
    this.errorMsg.set('');
    this.router.navigate(['/dashboard']);
  } else {
    this.errorMsg.set('Invalid email or password');
  }
  }
}