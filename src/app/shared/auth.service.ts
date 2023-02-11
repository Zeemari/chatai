import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private _router: Router) {}

  // login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this._router.navigate(['chat-in']);
      },
      (err) => {
        alert(err.message);
        this._router.navigate(['/login']);
      }
    );
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration Successful');
        this._router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this._router.navigate(['/register']);
      }
    );
  }

  // Signout method
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
