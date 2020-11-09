import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  constructor(private http: HttpClient) { }

  fetchVaccine() {
    return this.http.get("https://disease.sh/v3/covid-19/vaccine");
  }
}
