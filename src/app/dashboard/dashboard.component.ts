import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {DashboardService} from './dashboard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  create(): void {
    this.router.navigate(['/dashboard/new']);
  }
}
