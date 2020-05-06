import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';

import { About } from './about.model';
import { AboutStore } from './about.store';

@Injectable({ providedIn: 'root' })
export class AboutQuery extends Query<About> {
  constructor(protected store: AboutStore) {
    super(store);
  }

  public readonly skills$ = this.select('skills');
  public readonly story$ = this.select('story').pipe(
    map((story) => story?.split('\n'))
  );
}
