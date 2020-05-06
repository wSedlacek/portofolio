import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faSkype,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { ProfileComponent } from './profile.component';
import { ProfileQuery } from './state/profile.query';
import { ProfileService } from './state/profile.service';
import { ProfileStore } from './state/profile.store';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ProfileQuery, ProfileService, ProfileStore],
  exports: [ProfileComponent],
})
export class ProfileModule {
  constructor(private readonly library: FaIconLibrary) {
    library.addIcons(faGitlab, faGithub, faTwitter, faLinkedin, faSkype);
  }
}
