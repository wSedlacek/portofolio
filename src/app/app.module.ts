import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { environment } from '../environments';
import { AppComponent } from './app.component';
import { PanelsComponent } from './components/panels/panels.component';
import { AboutModule } from './features/about/about.module';
import { ActivityModule } from './features/activity/activity.module';
import { ProfileModule } from './features/profile/profile.module';
import { ProjectsModule } from './features/projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, PanelsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    environment.production ? [] : AkitaNgDevtools,
    MatTabsModule,
    FlexLayoutModule,
    AboutModule,
    ActivityModule,
    ProfileModule,
    ProjectsModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
