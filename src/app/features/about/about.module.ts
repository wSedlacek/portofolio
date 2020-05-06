import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

import { AboutComponent } from './about.component';
import { AboutQuery } from './state/about.query';
import { AboutService } from './state/about.service';
import { AboutStore } from './state/about.store';

@NgModule({
  imports: [CommonModule, MatChipsModule],
  declarations: [AboutComponent],
  providers: [AboutQuery, AboutService, AboutStore],
  exports: [AboutComponent],
})
export class AboutModule {}
