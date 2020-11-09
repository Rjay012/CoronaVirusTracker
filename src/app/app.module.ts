import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SummaryCardComponent } from './modules/dashboard/cards/summary-card/summary-card.component';
import { TabularSummaryComponent } from './modules/dashboard/tables/tabular-summary/tabular-summary.component';
import { VaccineComponent } from './modules/vaccine/vaccine.component';
import { ModulesComponent } from './modules/modules.component';
import { TablesComponent } from './modules/vaccine/tables/tables.component';
import { DetailModalComponent } from './modules/vaccine/modals/detail-modal/detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SummaryCardComponent,
    TabularSummaryComponent,
    VaccineComponent,
    ModulesComponent,
    TablesComponent,
    DetailModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
