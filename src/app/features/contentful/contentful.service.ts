import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from, Observable, of } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { environment } from '../../../environments';
import { byListedDate, byUpdatedDate } from '../../utils';
import { AboutDTO } from '../about/state/about.model';
import { ActivityDTO } from '../activity/state/activity.model';

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

  public getAbout(): Observable<AboutDTO | undefined> {
    if (!environment.contentful) return of(undefined);

    return from(
      this.cdaClient.getEntries<AboutDTO>({
        content_type: environment.contentful.contentTypeIds.about,
      })
    ).pipe(
      map((res) => res.items),
      switchMap((items) => [...items].sort(byUpdatedDate)),
      map((item) => item.fields),
      take(1),
      catchError(() => of(undefined))
    );
  }

  public getResume(): Observable<string | undefined> {
    if (!environment.contentful) return of(undefined);

    return from(
      this.cdaClient.getAsset(environment.contentful.contentTypeIds.resume)
    ).pipe(
      map((item) => item.fields.file.url),
      take(1),
      catchError(() => of(undefined))
    );
  }

  public getActivities(): Observable<ActivityDTO[] | undefined> {
    if (!environment.contentful) return of(undefined);

    return from(
      this.cdaClient.getEntries<ActivityDTO>({
        content_type: environment.contentful.contentTypeIds.activity,
      })
    ).pipe(
      map((res) => res.items),
      map((items) => items.map((item) => item.fields)),
      map((items) => [...items].sort(byListedDate)),
      catchError(() => of([]))
    );
  }
}
