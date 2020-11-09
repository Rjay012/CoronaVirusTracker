import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Vaccine } from 'src/app/models/vaccine.model';
import { DetailModalComponent } from '../modals/detail-modal/detail-modal.component';
import { VaccineService } from '../vaccine.service';

export interface VaccineDetails {
  vaccine: string,
  vaccineDetails: string
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  ELEMENT_DATA: Vaccine[];
  displayedColumns: string[] = ["candidate", "mechanism", "details", "sponsors", "trialPhase", "institutions"];
  dataSource: any;
  //detailModal: any;  //holds DetailModal Component

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private vaccineService: VaccineService, public dialog: MatDialog) { 
    //this.detailModal = new DetailModalComponent();  //initialize detail modal component
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Vaccine>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getVaccine();
  }

  openDialog(candidate: string, details: string) {
    this.dialog.open(DetailModalComponent, {
      width: '100%',
      data: {
        vaccine: candidate,
        vaccineDetails: details
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getVaccine() {
    let resp = this.vaccineService.fetchVaccine();
    resp.subscribe(respData => {
      this.dataSource.data = respData["data"] as Vaccine[];
    });
  }
}
