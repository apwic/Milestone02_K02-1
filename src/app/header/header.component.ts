import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthScene } from '../models/auth.model';
import { FakeAuthService } from '../services/fake-auth.service';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'edk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categoriesHovered: boolean = false;
  activitiesHovered: boolean = false;

  constructor(
    private scrimService: ScrimService,
    private authService: FakeAuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.setAuthScene(AuthScene.Login);
    this.showAuthModal();
  }

  signUp() {
    this.authService.setAuthScene(AuthScene.SignUp);
    this.showAuthModal();
  }

  showAuthModal() {
    this.scrimService.show();
    this.authService.showModal();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
