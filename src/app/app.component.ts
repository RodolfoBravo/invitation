import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow'; //this module is by use library wow.js

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wowService: NgwWowService) { //This contructor is by library wow.js
    this.wowService.init();
  }
  title = 'templateInvitation';
}
