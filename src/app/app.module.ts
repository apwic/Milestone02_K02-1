import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SearchbarComponent } from './header/searchbar/searchbar.component';
import { ScrimComponent } from './scrim/scrim.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ItemComponent } from './content/item/item.component';
import { ActivityComponent } from './content/item/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SearchbarComponent,
    ScrimComponent,
    AuthModalComponent,
    ItemComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
