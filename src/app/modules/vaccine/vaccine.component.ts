import { Component, OnInit } from '@angular/core';
import { VaccineService } from './vaccine.service';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
  }
}
