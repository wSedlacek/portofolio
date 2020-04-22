import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProfileComponent } from './profile.component';
import { ProfileQuery } from './state/profile.query';
import { ProfileService } from './state/profile.service';
import { ProfileStore } from './state/profile.store';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  providers: [ProfileQuery, ProfileService, ProfileStore],
  exports: [ProfileComponent],
})
export class ProfileModule {}
