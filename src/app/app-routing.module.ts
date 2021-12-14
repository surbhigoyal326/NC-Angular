import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'login', component : LoginComponent},

  { path: 'employees',
   loadChildren: () => import('./employees/employees.module')
   .then(m => m.EmployeesModule)  ,
   canLoad:[AuthGuardService]
  },
  { path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module')
  .then(m => m.DashboardModule) ,
  canLoad:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
