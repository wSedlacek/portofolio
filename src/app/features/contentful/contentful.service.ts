import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { EMPTY, from, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { environment } from '../../../environments';
import { AboutDTO } from '../about/state/about.model';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}
  private readonly cdaClient = environment.contentful
    ? createClient({
        space: environment.contentful.space,
        accessToken: environment.contentful.accessToken,
      })
    : undefined;

  public getAbout(): Observable<AboutDTO> {
    if (!environment.contentful) return EMPTY;

    return from(
      this.cdaClient.getEntries<AboutDTO>({
        content_type: environment.contentful.contentTypeIds.about,
      })
    ).pipe(
      map((res) => res.items),
      switchMap((items) =>
        [...items].sort((a, b) =>
          new Date(a.sys.updatedAt).getTime() <
          new Date(b.sys.updatedAt).getTime()
            ? 1
            : -1
        )
      ),
      map((item) => item.fields),
      take(1)
    );
  }
}
