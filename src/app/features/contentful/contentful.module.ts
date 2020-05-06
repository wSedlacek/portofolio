import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContentfulService } from './contentful.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ContentfulService],
})
export class ContentfulModule {}
