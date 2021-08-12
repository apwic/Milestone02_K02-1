import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthScene } from '../models/auth.model';
import { FakeAuthService } from '../services/fake-auth.service';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'edk-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;
  showError = false;
  showErrorTimeout: number;

  constructor(
    private authService: FakeAuthService,
    private scrimService: ScrimService) { }

  ngOnInit(): void {
    this.authService.authErrorEventEmitter.subscribe(scene => {
      if (scene === AuthScene.Login) {
        this.createLoginError();
        this.showError = true;
        this.showErrorTimeout = setTimeout(() => {
          this.showError = false;
        }, 3000);
      } else {
        this.createSignUpError();
        this.showError = true;
        this.showErrorTimeout = setTimeout(() => {
          this.showError = false;
        }, 3000);
      }
    });
    this.authService.authSuccessEventEmitter.subscribe(account => {
      this.close();
      // Do something on login
    });
  }

  isHidden() {
    return this.authService.modalHidden;
  }

  close() {
    this.authService.hideModal();
    this.scrimService.hide();
  }

  authTitle(): string {
    return this.authService.authSceneTitleText();
  }

  authSceneChangeText(): string {
    return this.authService.authSceneChangeText();
  }

  authConfirmText(): string {
    return this.authService.authConfirmText();
  }

  changeAuthScene() {
    this.showError = false;
    this.authService.changeScene();
  }

  authenticate() {
    console.log('authenticate() called')
    this.showError = false;
    let username = (<HTMLInputElement>this.usernameInput.nativeElement).value;
    let password = (<HTMLInputElement>this.passwordInput.nativeElement).value;
    (<HTMLInputElement>this.usernameInput.nativeElement).value = '';
    (<HTMLInputElement>this.passwordInput.nativeElement).value = '';
    this.authService.authenticate(username, password);
  }

  createLoginError() {
    return 'Invalid password or username doesn\'t exist !';
  }

  createSignUpError() {
    return 'Username already taken !';
  }

  errorText() {
    return this.authService.scene === AuthScene.Login
      ? this.createLoginError()
      : this.createSignUpError();
  }

}
