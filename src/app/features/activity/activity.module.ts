import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ActivityComponent } from './activity.component';

@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    YouTubePlayerModule,
    FlexModule,
  ],
  exports: [ActivityComponent],
})
export class ActivityModule {}
