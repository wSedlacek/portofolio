import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { About } from './about.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'profile' })
export class AboutStore extends Store<About> {
  constructor() {
    super({});
  }
}
