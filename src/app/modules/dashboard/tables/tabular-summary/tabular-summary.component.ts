import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tabular } from 'src/app/models/tabular.model';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-tabular-summary',
  templateUrl: './tabular-summary.component.html',
  styleUrls: ['./tabular-summary.component.css']
})
export class TabularSummaryComponent implements OnInit {
  ELEMENT_DATA: Tabular[];
  displayedColumns: string[] = ["country", "cases", "active", "recovered", "tests", "deaths"];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("inputSearch") input: ElementRef;

  constructor(public dashService: DashboardService) { }

  ngOnInit(): void {
   this.dataSource = new MatTableDataSource<Tabular>(this.ELEMENT_DATA);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.getAllReports();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public getAllReports() {
    let resp = this.dashService.showTable();
    resp.subscribe(report => {
      this.dataSource.data = report as Tabular[];
    });
  }
}
