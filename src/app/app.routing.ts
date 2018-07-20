import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DeviceListComponent } from './component/device-list/device-list.component';

export const ROUTES: Routes = [
     { path: '', redirectTo: '/Home', pathMatch: 'full' },
     { path: 'Home', component: DashboardComponent, data: { icon: 'fas fa-thermometer-half', text: 'Dashboard' } },
     { path: 'Device', component: DeviceListComponent, data: { icon: 'fas fa-microchip', text: 'Device' } },
];