import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/models/global';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {
  global: Global;
  constructor(private dashService: DashboardService) { 
    this.global = new Global();
  }

  ngOnInit(): void {
    this.fetchGlobalData();
  }

  fetchGlobalData() {
    this.dashService.fetchGlobal().subscribe((res: any[]) => {
      this.global.cases = res["cases"];
      this.global.recovered = res["recovered"];
      this.global.active = res["active"];
      this.global.critical = res["critical"];
      this.global.tests = res["tests"];
      this.global.affectedCountries = res["affectedCountries"];
      this.global.todayCases = res["todayCases"];
      this.global.deaths = res["deaths"];
    });
  }
}
