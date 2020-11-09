import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabular } from 'src/app/models/tabular.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  tabList: Tabular[];
  
  constructor(private http:HttpClient) { }

  fetchGlobal() {
    return this.http.get("https://disease.sh/v3/covid-19/all");  //https://covid19.mathdro.id/api | https://api.covid19api.com/summary other api
  }

  showTable() {
    return this.http.get("https://corona.lmao.ninja/v3/covid-19/countries");
  }
}
