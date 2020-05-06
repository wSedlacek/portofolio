import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { extractMetadata } from '../../../utils/metadata.util';
import { ContentfulService } from '../../contentful/contentful.service';

import { About } from './about.model';
import { AboutStore } from './about.store';

@Injectable({ providedIn: 'root' })
export class AboutService {
  constructor(
    private readonly store: AboutStore,
    private readonly contentful: ContentfulService
  ) {}

  public get(): Observable<About> {
    this.store.setError(undefined);
    this.store.setLoading(true);

    return this.contentful.getAbout().pipe(
      map((about) => {
        const [{ Skills: skills }] = extractMetadata(about.metadata);

        return { ...about, skills };
      }),
      tap((about) => {
        this.store.setLoading(false);
        this.store.update(about);
      }),
      catchError((e) => {
        this.store.setLoading(false);
        this.store.setError(e);
        throw e;
      })
    );
  }
}
