import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCode, faLink } from '@fortawesome/free-solid-svg-icons';
import { NgTakePipeModule, NgTruncatePipeModule } from 'angular-pipes';

import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent, ProjectComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FontAwesomeModule,
    NgTruncatePipeModule,
    NgTakePipeModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule {
  constructor(private readonly library: FaIconLibrary) {
    library.addIcons(faCode, faLink);
  }
}
