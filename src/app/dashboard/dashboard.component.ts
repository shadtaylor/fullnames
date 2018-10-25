import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName: string;
  lastName: string;

  match: boolean;

  constructor(private dashboardService: DashboardService) {

  }
  
  doSearch (first: string, last: string) {
    this.dashboardService.updateSearchHistory(first, last);

    this.dashboardService.lookupName(first, last)
        .subscribe(match => {
          console.log(`match = ${match}`);
          this.match = match;
        });
  }

  addName(first: string, last: string) {
    this.dashboardService.addName(first, last);
  }

  ngOnInit() {
  }

}
