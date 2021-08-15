import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { ActivityType } from '../models/activity.model';
import { AuthScene } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  modalHidden: boolean = true;
  accounts: Account[] = [
    {
      username: 'edukawan',
      password: 'edukawan',
      activities: []
    }
  ];
  scene: AuthScene = AuthScene.Login;
  authErrorEventEmitter = new EventEmitter<AuthScene>();
  authSuccessEventEmitter = new EventEmitter<Account>();
  isAuthenticated: boolean = false;
  currentAccount: Account;
  
  constructor() { }

  showModal() {
    this.modalHidden = false;
  }

  hideModal() {
    this.modalHidden = true;
  }

  setAuthScene(scene: AuthScene) {
    this.scene = scene;
  }

  authSceneTitleText(): string {
    return this.scene === AuthScene.Login ? 'Login' : 'Sign Up';
  }

  authSceneChangeText(): string {
    return this.scene === AuthScene.Login ? 'Don\'t have an account?' : 'Already have an account?';
  }

  authConfirmText(): string {
    return this.scene === AuthScene.Login ? 'LOGIN' : 'SIGN UP';
  }

  changeScene() {
    if (this.scene === AuthScene.Login) {
      this.scene = AuthScene.SignUp;
    } else {
      this.scene = AuthScene.Login;
    }
  }

  authenticate(username: string, password: string) {
    if (this.scene === AuthScene.Login) {
      this.login(username, password);
    } else {
      this.signUp(username, password);
    }
  }

  login(username: string, password: string) {
    if (!this.isUsernameExist(username)) {
      this.authErrorEventEmitter.emit(this.scene);
    } else {
      let account = this.getAccountByUsername(username);
      if (!(account.password === password)) {
        this.authErrorEventEmitter.emit(this.scene);
      } else {
        this.currentAccount = account;
        this.isAuthenticated = true;
        this.authSuccessEventEmitter.emit(account);
      }
    }
  }

  signUp(username: string, password: string) {
    if (this.isUsernameExist(username)) {
      this.authErrorEventEmitter.emit(this.scene);
    } else {
      let newAccount: Account = {
        username: username,
        password: password,
        activities: []
      }
      this.accounts.push(newAccount);
      this.login(username, password);
    }
  }

  isUsernameExist(username: string): boolean {
    let usernameExists = false;
    this.accounts.forEach(account => {
      if (account.username == username) {
        usernameExists = true;
      }
    });
    return usernameExists;
  }

  getAccountByUsername(username: string): Account {
    let acc: Account = {
      username: '',
      password: '',
      activities: []
    }
    this.accounts.forEach(account => {
      if (account.username == username) {
        acc = account;
      }
    });
    return acc;
  }

  isActivityJoined(type: ActivityType, id: number) {
    let joined = false;
    this.currentAccount.activities.forEach(activity => {
      if (activity.type === type && activity.id === id) {
        joined = true;
      }
    });
    return joined;
  }
}
