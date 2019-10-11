import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {

  private title = 'About';

  constructor(
    private titleService: Title,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`${this.title} - ${this.sharedService.mainPageTitle}`);
  }

}
