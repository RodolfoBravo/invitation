import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow'; // configuration for use library Wow.js
import { HeroComponent } from './hero/hero.component';
import { DatetimeComponent } from './hero/datetime/datetime.component';
import { LocationComponent } from './location/location.component';
import { LocationImagesComponent } from './location/location-images/location-images.component';
import { LocationRoomComponent } from './location/location-room/location-room.component';
import { PeopleComponent } from './people/people.component';
import { CoupleComponent } from './people/couple/couple.component';
import { GodparentsComponent } from './people/godparents/godparents.component';
import { GiftsComponent } from './gifts/gifts.component';
import { InformationComponent } from './information/information.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DatetimeComponent,
    LocationComponent,
    LocationImagesComponent,
    LocationRoomComponent,
    PeopleComponent,
    CoupleComponent,
    GodparentsComponent,
    GiftsComponent,
    InformationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
