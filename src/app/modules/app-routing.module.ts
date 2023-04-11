import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from '../components/departments/departments.component';
import { TimesheetsComponent } from '../components/timesheets/timesheets.component';
import { AnalyticsComponent } from '../components/analytics/analytics.component'

const routes: Routes = [
  { path: '',   redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: TimesheetsComponent },
  { path: 'analytics', component: AnalyticsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
