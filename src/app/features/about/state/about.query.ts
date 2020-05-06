import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import { About } from './about.model';
import { AboutStore } from './about.store';

@Injectable({ providedIn: 'root' })
export class AboutQuery extends Query<About> {
  constructor(protected store: AboutStore) {
    super(store);
  }
}
