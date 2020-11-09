import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VaccineDetails } from '../../tables/tables.component';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})

export class DetailModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: VaccineDetails) { }

  ngOnInit(): void {
  }
}
