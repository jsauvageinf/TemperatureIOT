import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { 
  MzButtonModule, 
  MzInputModule,
  MzSidenavModule,
  MzIconModule,
  MzIconMdiModule,
  MzCardModule,
  MzTooltipModule
} from 'ngx-materialize';


import { ROUTES } from './app.routing';
import { MenuComponent } from './component/menu/menu.component';
import { AnimatedPanelComponent } from './component/animated-panel/animated-panel.component';
import { DeviceListComponent } from './component/device-list/device-list.component';
import { ChartsModule } from 'ng2-charts';
import { SearchDevicePipe } from './pipe/search-device.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    AnimatedPanelComponent,
    DeviceListComponent,
    SearchDevicePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    MzCardModule,
    MzTooltipModule,

    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
