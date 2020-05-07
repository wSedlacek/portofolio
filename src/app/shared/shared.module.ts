import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SafePipe } from './safe.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [SafePipe, TimeAgoPipe],
  imports: [CommonModule],
  exports: [SafePipe, TimeAgoPipe],
})
export class SharedModule {}
