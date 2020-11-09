import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ModulesComponent } from './modules/modules.component';
import { VaccineComponent } from './modules/vaccine/vaccine.component';


const routes: Routes = [
  { path: "", redirectTo: "/modules/dashboard", pathMatch: "full" },  //default route
  {
    path: "modules", component: ModulesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "vaccine", component: VaccineComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
